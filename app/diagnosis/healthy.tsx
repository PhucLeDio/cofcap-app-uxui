import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#757575';
const DIVIDER_COLOR = '#F5F5F5';

export default function DiagnosisHealthyScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={[styles.header, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <TouchableOpacity onPress={() => router.navigate('/(tabs)')} style={styles.backButton}>
          <Ionicons name="close" size={28} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <View style={styles.backButton} />
        <View style={styles.backButton} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.iconContainer}>
          <Ionicons name="leaf" size={60} color={BRAND_GREEN} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Your plant looks healthy!</Text>
          <Text style={styles.subtitle}>No disease problems detected.</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image 
            source="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80" 
            style={styles.healthyImage}
            contentFit="cover"
          />
        </View>
      </ScrollView>

      {/* Bottom Action */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
        <TouchableOpacity 
          style={styles.expertBtn} 
          activeOpacity={0.8}
          onPress={() => router.push('/ask-experts' as any)}
        >
          <Text style={styles.expertBtnText}>Ask Experts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCREEN_BG,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: SCREEN_BG,
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  iconContainer: {
    marginTop: 40,
    marginBottom: 32,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
    marginBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: TEXT_PRIMARY,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: TEXT_SECONDARY,
    textAlign: 'center',
  },
  imageContainer: {
    width: '90%',
    aspectRatio: 1,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
  },
  healthyImage: {
    width: '100%',
    height: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: SCREEN_BG,
    borderTopWidth: 1,
    borderTopColor: DIVIDER_COLOR,
    paddingTop: 16,
  },
  expertBtn: {
    backgroundColor: BRAND_GREEN,
    height: 56,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: BRAND_GREEN,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  expertBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
