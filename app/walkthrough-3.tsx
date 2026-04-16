import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const HERO_BG = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TITLE_COLOR = '#212121';
const BODY_COLOR = '#616161';
const DOT_INACTIVE = '#EEEEEE';

const PHONE_MOCKUP_URL = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80';
const ELLIPSE_URL = 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80';

export default function WalkthroughThreeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.hero}>
        <Image source={{ uri: ELLIPSE_URL }} style={styles.ellipse} contentFit="cover" />
        <Image source={{ uri: PHONE_MOCKUP_URL }} style={styles.phoneImage} contentFit="cover" />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>My Plants - A Green Diary Just for You</Text>
        <Text style={styles.description}>
          Bring your garden to life! Add your favorite plants, set care reminders, snap progress
          photos, &amp; explore your planting history.
        </Text>

        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.getStartedButton} onPress={() => router.replace('/welcome')}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCREEN_BG,
  },
  hero: {
    height: 520,
    backgroundColor: HERO_BG,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  ellipse: {
    position: 'absolute',
    bottom: -329,
    width: 519,
    height: 1049,
  },
  phoneImage: {
    width: 345,
    height: 700,
    marginBottom: -180,
  },
  content: {
    marginTop: -8,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 36,
    alignItems: 'center',
    gap: 24,
  },
  title: {
    textAlign: 'center',
    color: TITLE_COLOR,
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 51,
  },
  description: {
    textAlign: 'center',
    color: BODY_COLOR,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 29,
    letterSpacing: 0.2,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 1000,
    backgroundColor: DOT_INACTIVE,
  },
  activeDot: {
    width: 32,
    backgroundColor: HERO_BG,
  },
  footer: {
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 36,
    backgroundColor: '#FFFFFF',
  },
  getStartedButton: {
    borderRadius: 1000,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: HERO_BG,
  },
  getStartedText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.2,
  },
});
