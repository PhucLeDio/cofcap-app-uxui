import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TITLE_COLOR = '#212121';
const SUBTITLE_COLOR = '#616161';
const BUTTON_LIGHT_BG = '#EBF8F3';
const BORDER_COLOR = '#EEEEEE';

const LOGO_URL = 'https://www.figma.com/api/mcp/asset/668793f9-05bc-4327-b8ab-58bbe12cf2e6';
const GOOGLE_ICON_URL = 'https://www.figma.com/api/mcp/asset/340a22a5-8d2a-4949-9f22-cbf1dc47d53d';
const APPLE_ICON_URL = 'https://www.figma.com/api/mcp/asset/265ef713-93f3-4623-a388-f89353c1fa5d';
const FACEBOOK_ICON_URL = 'https://www.figma.com/api/mcp/asset/49349e45-68a7-4932-8c79-84479571ae6c';
const TWITTER_ICON_URL = 'https://www.figma.com/api/mcp/asset/abb59cab-8f98-43c1-b01f-bb0e759230ef';

type SocialButtonProps = {
  label: string;
  iconUrl: string;
};

function SocialButton({ label, iconUrl }: SocialButtonProps) {
  return (
    <Pressable style={styles.socialButton}>
      <View style={styles.socialButtonInner}>
        <Image source={{ uri: iconUrl }} style={styles.socialIcon} contentFit="contain" />
        <Text style={styles.socialButtonText}>{label}</Text>
        <View style={styles.socialIconSpacer} />
      </View>
    </Pressable>
  );
}

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.content}>
        <View style={styles.topSection}>
          <Image source={{ uri: LOGO_URL }} style={styles.logo} contentFit="contain" />

          <View style={styles.headingBlock}>
            <Text style={styles.title}>{"Let's Get Started!"}</Text>
            <Text style={styles.subtitle}>{"Let's dive in into your account"}</Text>
          </View>
        </View>

        <View style={styles.socialList}>
          <SocialButton label="Continue with Google" iconUrl={GOOGLE_ICON_URL} />
          <SocialButton label="Continue with Apple" iconUrl={APPLE_ICON_URL} />
          <SocialButton label="Continue with Facebook" iconUrl={FACEBOOK_ICON_URL} />
          <SocialButton label="Continue with Twitter" iconUrl={TWITTER_ICON_URL} />
        </View>

        <View style={styles.authButtons}>
          <Pressable style={styles.signUpButton} onPress={() => router.push('/sign-up')}>
            <Text style={styles.signUpText}>Sign up</Text>
          </Pressable>
          <Pressable style={styles.logInButton} onPress={() => router.push('/log-in')}>
            <Text style={styles.logInText}>Log in</Text>
          </Pressable>
        </View>

        <View style={styles.legalRow}>
          <Text style={styles.legalText}>Privacy Policy</Text>
          <Text style={styles.legalText}>•</Text>
          <Text style={styles.legalText}>Terms of Service</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCREEN_BG,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 36,
    justifyContent: 'space-between',
  },
  topSection: {
    alignItems: 'center',
    gap: 36,
  },
  logo: {
    width: 80,
    height: 80,
  },
  headingBlock: {
    width: '100%',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    color: TITLE_COLOR,
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 51,
    textAlign: 'center',
  },
  subtitle: {
    color: SUBTITLE_COLOR,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 29,
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  socialList: {
    gap: 20,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 1000,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  socialButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  socialButtonText: {
    flex: 1,
    color: TITLE_COLOR,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  socialIconSpacer: {
    width: 24,
    height: 24,
  },
  authButtons: {
    gap: 20,
  },
  signUpButton: {
    borderRadius: 1000,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BRAND_GREEN,
  },
  signUpText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.2,
  },
  logInButton: {
    borderRadius: 1000,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BUTTON_LIGHT_BG,
  },
  logInText: {
    color: BRAND_GREEN,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.2,
  },
  legalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  legalText: {
    color: SUBTITLE_COLOR,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.2,
  },
});
