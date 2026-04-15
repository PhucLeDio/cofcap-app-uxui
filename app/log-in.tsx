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
const BUTTON_DISABLED = '#008656';

const ARROW_LEFT_URL = 'https://www.figma.com/api/mcp/asset/4f2d8b7d-b9dd-4e83-8098-99169944a29c';
const EMAIL_ICON_URL = 'https://www.figma.com/api/mcp/asset/d9741045-9eeb-4115-84c1-da178f77cb90';
const LOCK_ICON_URL = 'https://www.figma.com/api/mcp/asset/a0f99c0b-33b9-4e93-8429-138090dbd11b';
const HIDE_ICON_URL = 'https://www.figma.com/api/mcp/asset/c60c17be-cc01-4baa-b640-1dab40f0e608';
const GOOGLE_ICON_URL = 'https://www.figma.com/api/mcp/asset/68d3d408-f0d4-485e-a63d-154e7b84e1a2';
const APPLE_ICON_URL = 'https://www.figma.com/api/mcp/asset/c809a5ec-37c7-4be6-b627-7755c55e8f2f';
const FACEBOOK_ICON_URL = 'https://www.figma.com/api/mcp/asset/ce56bd5d-01af-42fc-8aa2-ee1c61cf0b61';

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

export default function LogInScreen() {
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
          <Text style={styles.title}>Welcome Back! 👋</Text>
          <Text style={styles.subtitle}>{"Let's Continue Your Green Journey"}</Text>
        </View>

        <View style={styles.formSection}>
          <View style={styles.fieldsGroup}>
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
          </View>

          <View style={styles.utilityRow}>
            <View style={styles.rememberRow}>
              <View style={styles.checkbox} />
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
        <Pressable 
          style={[styles.logInButton, isValid && { backgroundColor: BRAND_GREEN }]} 
          onPress={() => { if (isValid) router.push('/log-in-loading'); }}
        >
          <Text style={styles.logInText}>Log in</Text>
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
  input: {
    flex: 1,
    color: TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 29,
    letterSpacing: 0.2,
    paddingVertical: 0,
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
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: BRAND_GREEN,
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
    backgroundColor: BUTTON_DISABLED,
  },
  logInText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.2,
  },
});
