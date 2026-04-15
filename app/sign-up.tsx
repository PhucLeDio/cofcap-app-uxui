import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#616161';
const FIELD_BG = '#FAFAFA';
const FIELD_PLACEHOLDER = '#9E9E9E';
const BORDER_COLOR = '#EEEEEE';
const DISABLED_BUTTON = '#008656';

const ARROW_LEFT_URL = 'https://www.figma.com/api/mcp/asset/d58d2155-734e-40db-ada4-1d1117a41a95';
const EMAIL_ICON_URL = 'https://www.figma.com/api/mcp/asset/0f11850a-0169-4378-8ff5-44289b725a69';
const LOCK_ICON_URL = 'https://www.figma.com/api/mcp/asset/ed6da2f1-01a7-46fa-af67-938c5059181d';
const HIDE_ICON_URL = 'https://www.figma.com/api/mcp/asset/7e093584-b13a-488a-b3d5-46ffa9e2d713';
const GOOGLE_ICON_URL = 'https://www.figma.com/api/mcp/asset/9afd7c5f-c5d2-45ec-bbf8-850f55e4ee45';
const APPLE_ICON_URL = 'https://www.figma.com/api/mcp/asset/10659c9d-e0c0-4638-a128-e010c0078165';
const FACEBOOK_ICON_URL = 'https://www.figma.com/api/mcp/asset/bd5e928e-0f36-45df-ad29-a97e3610c152';

type SocialButtonProps = {
  label: string;
  iconUrl: string;
};

function SocialButton({ label, iconUrl }: SocialButtonProps) {
  return (
    <Pressable style={styles.socialButton}>
      <View style={styles.socialInner}>
        <Image source={{ uri: iconUrl }} style={styles.socialIcon} contentFit="contain" />
        <Text style={styles.socialLabel}>{label}</Text>
        <View style={styles.socialSpacer} />
      </View>
    </Pressable>
  );
}

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isValid = email.trim().length > 0 && password.length > 0;

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
          <Text style={styles.title}>Join CofCap Today 👤</Text>
          <Text style={styles.subtitle}>Create Your Blooming Account</Text>
        </View>

        <View style={styles.formSection}>
          <View style={styles.fieldBlock}>
            <Text style={styles.fieldLabel}>Email</Text>
            <View style={styles.field}>
              <Image source={{ uri: EMAIL_ICON_URL }} style={styles.fieldIcon} contentFit="contain" />
              <TextInput
                placeholder="Email"
                placeholderTextColor={FIELD_PLACEHOLDER}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          <View style={styles.fieldBlock}>
            <Text style={styles.fieldLabel}>Password</Text>
            <View style={styles.field}>
              <Image source={{ uri: LOCK_ICON_URL }} style={styles.fieldIcon} contentFit="contain" />
              <TextInput
                placeholder="Password"
                placeholderTextColor={FIELD_PLACEHOLDER}
                style={styles.input}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <Image source={{ uri: HIDE_ICON_URL }} style={styles.fieldIcon} contentFit="contain" />
            </View>
          </View>

          <Pressable style={styles.loginPrompt} onPress={() => router.push('/log-in')}>
            <Text style={styles.promptText}>Already have an account?</Text>
            <Text style={styles.promptAction}>Log in</Text>
          </Pressable>
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
        <Pressable 
          style={[styles.signUpButton, isValid && { backgroundColor: BRAND_GREEN }]} 
          onPress={() => { if (isValid) router.push('/sign-up-loading'); }}
        >
          <Text style={styles.signUpText}>Sign up</Text>
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
  input: {
    flex: 1,
    color: TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 29,
    letterSpacing: 0.2,
    paddingVertical: 0,
  },
  loginPrompt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  promptText: {
    color: TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 29,
    letterSpacing: 0.2,
  },
  promptAction: {
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
  signUpButton: {
    borderRadius: 1000,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DISABLED_BUTTON,
  },
  signUpText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.2,
  },
});
