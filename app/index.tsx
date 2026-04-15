import { Image } from 'expo-image';
import { type Href, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';

const BRAND_GREEN = '#00A86B';
const LOGO_URL = 'https://www.figma.com/api/mcp/asset/2af6cc25-39af-49a3-ac21-4afc90b48310';
const LOADER_URL = 'https://www.figma.com/api/mcp/asset/1e45b925-44ac-435a-b368-367b0b185311';
const SPLASH_DURATION_MS = 1800;

export default function SplashScreen() {
  const spin = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    spinAnimation.start();

    const timeout = setTimeout(() => {
      router.replace('/walkthrough-1' as Href);
    }, SPLASH_DURATION_MS);

    return () => {
      clearTimeout(timeout);
      spinAnimation.stop();
    };
  }, [spin]);

  const rotate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.centerContent}>
        <Image source={{ uri: LOGO_URL }} style={styles.logo} contentFit="contain" />
        <Text style={styles.brandText}>CofCap</Text>
      </View>

      <Animated.View style={[styles.loaderContainer, { transform: [{ rotate }] }]}>
        <Image source={{ uri: LOADER_URL }} style={styles.loader} contentFit="contain" />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BRAND_GREEN,
  },
  centerContent: {
    alignItems: 'center',
    gap: 32,
    transform: [{ translateY: -32 }],
  },
  logo: {
    width: 160,
    height: 160,
  },
  brandText: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 64,
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 80,
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    width: 66.67,
    height: 66.26,
  },
});
