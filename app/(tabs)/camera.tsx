import { StyleSheet, Text, View, TouchableOpacity, Platform, Animated, Easing } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';

const BRAND_GREEN = '#00A86B';

export default function CameraScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [diagnosing, setDiagnosing] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Animation value for the scanning line
  const scanAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (permission && permission.granted) {
      startScanningAnimation();
      startSimulatedDiagnosis();
    }
  }, [permission]);

  const startScanningAnimation = () => {
    scanAnim.setValue(0);
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(scanAnim, {
          toValue: 0,
          duration: 2000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const startSimulatedDiagnosis = () => {
    setDiagnosing(true);
    let current = 0;
    const interval = setInterval(() => {
       current += 1;
       if (current >= 100) {
          clearInterval(interval);
          setProgress(100);
       } else {
          setProgress(current);
       }
    }, 100);
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={[styles.container, { paddingHorizontal: 32 }]}>
        <Text style={styles.permissionText}>We need your permission to show the camera</Text>
        <TouchableOpacity style={styles.permissionBtn} onPress={requestPermission}>
          <Text style={styles.permissionBtnText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Interpolate scanning line position
  const translateY = scanAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 240], // Height of the scan frame is 250, so move it across
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <CameraView style={StyleSheet.absoluteFillObject} facing="back" />

      {/* Header Overlay */}
      <View style={[styles.header, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
          <Ionicons name="close" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Diagnose</Text>
        <View style={styles.iconButton} />
      </View>

      {/* Scanning Overlay (HUD) */}
      <View style={styles.overlayContainer}>
        <View style={styles.scanningFrame}>
          {/* Green Frame Corners/Borders */}
          <View style={styles.frameCornerTopLeft} />
          <View style={styles.frameCornerTopRight} />
          <View style={styles.frameCornerBottomLeft} />
          <View style={styles.frameCornerBottomRight} />
          
          {/* Animated Scanning Line */}
          <Animated.View style={[styles.scanLine, { transform: [{ translateY }] }]} />
        </View>

        {/* Diagnosis Results (Progress Indicator) */}
        <View style={styles.progressContainer}>
           <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
           </View>
           <Text style={styles.percentageText}>{progress}%</Text>
           <Text style={styles.statusText}>Diagnosing plants...</Text>
        </View>
      </View>

      {/* Bottom Controls */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + 20 }]}>
        <TouchableOpacity style={styles.sideButton}>
          <Ionicons name="folder-open-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.shutterButton} activeOpacity={0.8}>
           <View style={styles.shutterInner} />
           {/* Visual ring simulating progress or focus */}
           <View style={[styles.shutterRing, { borderTopColor: progress > 50 ? BRAND_GREEN : 'transparent' }]} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sideButton}>
          <Ionicons name="images-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  permissionText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 24,
  },
  permissionBtn: {
    backgroundColor: BRAND_GREEN,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 100,
  },
  permissionBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  iconButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  scanningFrame: {
    width: 280,
    height: 250,
    borderWidth: 0,
    position: 'relative',
    backgroundColor: 'rgba(0, 168, 107, 0.05)',
  },
  frameCornerTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: BRAND_GREEN,
    borderTopLeftRadius: 16,
  },
  frameCornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: BRAND_GREEN,
    borderTopRightRadius: 16,
  },
  frameCornerBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: BRAND_GREEN,
    borderBottomLeftRadius: 16,
  },
  frameCornerBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: BRAND_GREEN,
    borderBottomRightRadius: 16,
  },
  scanLine: {
    height: 3,
    backgroundColor: BRAND_GREEN,
    width: '100%',
    shadowColor: BRAND_GREEN,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  progressContainer: {
    marginTop: 40,
    alignItems: 'center',
    width: '80%',
  },
  progressBarBg: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 3,
    width: '100%',
    overflow: 'hidden',
    marginBottom: 16,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: BRAND_GREEN,
  },
  percentageText: {
    fontSize: 40,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  statusText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 24,
  },
  sideButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutterButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  shutterInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#EEEEEE',
  },
  shutterRing: {
    position: 'absolute',
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 3,
    borderColor: 'transparent',
  },
});
