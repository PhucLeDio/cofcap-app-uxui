import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#616161';
const FIELD_BG = '#FAFAFA';
const BORDER_COLOR = '#EEEEEE';

const ARROW_LEFT_URL = 'https://img.icons8.com/ios-filled/50/000000/left.png';
const EMAIL_ICON_URL = 'https://img.icons8.com/ios-filled/50/757575/new-post.png';
const LOCK_ICON_URL = 'https://img.icons8.com/ios-filled/50/757575/lock.png';
const HIDE_ICON_URL = 'https://img.icons8.com/ios-filled/50/757575/invisible.png';
const CHECKED_BOX_URL = 'https://img.icons8.com/ios-filled/50/00A86B/checked-checkbox.png';
const GOOGLE_ICON_URL = 'https://img.icons8.com/color/48/000000/google-logo.png';
const APPLE_ICON_URL = 'https://img.icons8.com/ios-filled/50/000000/mac-os.png';
const FACEBOOK_ICON_URL = 'https://img.icons8.com/color/48/000000/facebook-new.png';
const LOADER_URL = 'https://img.icons8.com/ios/50/ffffff/spinner-frame-5.png';

type SocialButtonProps = {
  label: string;
  iconUrl: string;
};

function SocialButton({ label, iconUrl }: SocialButtonProps) {
  return (
    <View style={styles.socialButton}>
      <View style={styles.socialInner}>
        <Image source={{ uri: iconUrl }} style={styles.socialIcon} contentFit="contain" />
        <Text style={styles.socialLabel}>{label}</Text>
        <View style={styles.socialSpacer} />
      </View>
    </View>
  );
}

export default function LogInLoadingScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.navbar}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Image source={{ uri: ARROW_LEFT_URL }} style={styles.backIcon} contentFit="contain" />
        </Pressable>
      </View>

      <View style={styles.content}>
        <View style={styles.headerBlock}>
          <Text style={styles.title}>Welcome Back! 👋</Text>
          <Text style={styles.subtitle}>{"Let's Continue Your Green Journey"}</Text>
        </View>

        <View style={styles.formSection}>
          <View style={styles.fieldsGroup}>
            <View style={styles.fieldBlock}>
              <Text style={styles.fieldLabel}>Email</Text>
              <View style={styles.field}>
                <Image source={{ uri: EMAIL_ICON_URL }} style={styles.fieldIcon} contentFit="contain" />
                <Text style={styles.filledEmail}>CofCap@yourdomain.com</Text>
              </View>
            </View>

            <View style={styles.fieldBlock}>
              <Text style={styles.fieldLabel}>Password</Text>
              <View style={styles.field}>
                <Image source={{ uri: LOCK_ICON_URL }} style={styles.fieldIcon} contentFit="contain" />
                <Text style={styles.filledPassword}>●●●●●●●●●●●●</Text>
                <Image source={{ uri: HIDE_ICON_URL }} style={styles.fieldIcon} contentFit="contain" />
              </View>
            </View>
          </View>

          <View style={styles.utilityRow}>
            <View style={styles.rememberRow}>
              <Image source={{ uri: CHECKED_BOX_URL }} style={styles.checkedBox} contentFit="contain" />
              <Text style={styles.rememberText}>Remember me</Text>
            </View>
            <Pressable onPress={() => router.push('/forgot-password')}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.socialSection}>
          <View style={styles.orRow}>
            <View style={styles.divider} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.divider} />
          </View>

          <SocialButton label="Continue with Google" iconUrl={GOOGLE_ICON_URL} />
          <SocialButton label="Continue with Apple" iconUrl={APPLE_ICON_URL} />
          <SocialButton label="Continue with Facebook" iconUrl={FACEBOOK_ICON_URL} />
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.logInButton}>
          <Text style={styles.logInText}>Log in</Text>
        </View>
      </View>

      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Image source={{ uri: LOADER_URL }} style={styles.loader} contentFit="contain" />
          <Text style={styles.modalText}>Log in...</Text>
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
  navbar: {
    marginTop: 44,
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  backButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 28,
    height: 28,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 32,
  },
  headerBlock: {
    gap: 8,
  },
  title: {
    color: TEXT_PRIMARY,
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 51,
  },
  subtitle: {
    color: TEXT_SECONDARY,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 29,
    letterSpacing: 0.2,
  },
  formSection: {
    gap: 24,
  },
  fieldsGroup: {
    gap: 16,
  },
  fieldBlock: {
    gap: 8,
  },
  fieldLabel: {
    color: TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 29,
    letterSpacing: 0.2,
  },
  field: {
    backgroundColor: FIELD_BG,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: FIELD_BG,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  fieldIcon: {
    width: 20,
    height: 20,
  },
  filledEmail: {
    flex: 1,
    color: TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 29,
    letterSpacing: 0.2,
  },
  filledPassword: {
    flex: 1,
    color: TEXT_PRIMARY,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 19,
    letterSpacing: 0.2,
  },
  utilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  checkedBox: {
    width: 24,
    height: 24,
  },
  rememberText: {
    color: TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 29,
    letterSpacing: 0.2,
  },
  forgotText: {
    color: BRAND_GREEN,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 29,
    letterSpacing: 0.2,
  },
  socialSection: {
    gap: 20,
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: BORDER_COLOR,
  },
  orText: {
    color: TEXT_SECONDARY,
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 29,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 1000,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  socialInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  socialLabel: {
    flex: 1,
    color: TEXT_PRIMARY,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  socialSpacer: {
    width: 24,
    height: 24,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 36,
    backgroundColor: '#FFFFFF',
  },
  logInButton: {
    borderRadius: 1000,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BRAND_GREEN,
  },
  logInText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(9, 16, 29, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: 340,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    paddingVertical: 32,
    paddingHorizontal: 32,
    alignItems: 'center',
    gap: 24,
  },
  loader: {
    width: 66.67,
    height: 66.26,
  },
  modalText: {
    color: TEXT_PRIMARY,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 32,
    textAlign: 'center',
  },
});
