import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#616161';
const TEXT_MUTED = '#9E9E9E';
const FIELD_BG = '#FAFAFA';

const ARROW_LEFT_URL = 'https://www.figma.com/api/mcp/asset/71f362bb-4d62-4368-a2b7-b33b9392e489';
const BACKSPACE_ICON_URL = 'https://www.figma.com/api/mcp/asset/9c58375d-daab-491f-adc2-a0d7d1936783';

function KeypadButton({ label }: { label: string }) {
  return (
    <View style={styles.keypadButton}>
      <Text style={styles.keypadButtonText}>{label}</Text>
    </View>
  );
}

export default function EnterOtpScreen() {
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
          <Text style={styles.title}>Enter OTP Code 🔐</Text>
          <Text style={styles.subtitle}>
            Please check your email inbox for a message from CofCap. Enter the one-time verification
            code below.
          </Text>
        </View>

        <View style={styles.pinRow}>
          <View style={styles.pinFilled}>
            <Text style={styles.pinFilledText}>7</Text>
          </View>
          <View style={styles.pinFilled}>
            <Text style={styles.pinFilledText}>4</Text>
          </View>
          <View style={styles.pinActive}>
            <Text style={styles.pinActiveText}>5</Text>
          </View>
          <View style={styles.pinEmpty} />
        </View>

        <View style={styles.resendBlock}>
          <Text style={styles.resendInfo}>
            You can resend the code in <Text style={styles.resendSeconds}>56</Text> seconds
          </Text>
          <Text style={styles.resendAction}>Resend code</Text>
        </View>
      </View>

      <View style={styles.keyboard}>
        <View style={styles.keyboardRow}>
          <KeypadButton label="1" />
          <KeypadButton label="2" />
          <KeypadButton label="3" />
        </View>
        <View style={styles.keyboardRow}>
          <KeypadButton label="4" />
          <KeypadButton label="5" />
          <KeypadButton label="6" />
        </View>
        <View style={styles.keyboardRow}>
          <KeypadButton label="7" />
          <KeypadButton label="8" />
          <KeypadButton label="9" />
        </View>
        <View style={styles.keyboardRow}>
          <KeypadButton label="*" />
          <KeypadButton label="0" />
          <View style={styles.keypadButton}>
            <Image source={{ uri: BACKSPACE_ICON_URL }} style={styles.backspaceIcon} contentFit="contain" />
          </View>
        </View>
        <View style={styles.homeIndicator} />
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
  pinRow: {
    flexDirection: 'row',
    gap: 16,
  },
  pinFilled: {
    flex: 1,
    height: 70,
    borderRadius: 12,
    backgroundColor: FIELD_BG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinFilledText: {
    color: TEXT_PRIMARY,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 38,
  },
  pinActive: {
    flex: 1,
    height: 70,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: BRAND_GREEN,
    backgroundColor: 'rgba(0,168,107,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinActiveText: {
    color: TEXT_PRIMARY,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 38,
  },
  pinEmpty: {
    flex: 1,
    height: 70,
    borderRadius: 12,
    backgroundColor: FIELD_BG,
  },
  resendBlock: {
    alignItems: 'center',
    gap: 16,
  },
  resendInfo: {
    color: TEXT_SECONDARY,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 29,
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  resendSeconds: {
    color: BRAND_GREEN,
  },
  resendAction: {
    color: TEXT_MUTED,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 29,
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  keyboard: {
    backgroundColor: FIELD_BG,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 8,
    gap: 8,
  },
  keyboardRow: {
    flexDirection: 'row',
    gap: 8,
  },
  keypadButton: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    backgroundColor: FIELD_BG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keypadButtonText: {
    color: TEXT_PRIMARY,
    fontSize: 36 / 1.5,
    fontWeight: '500',
    lineHeight: 32,
    textAlign: 'center',
  },
  backspaceIcon: {
    width: 28,
    height: 28,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    borderRadius: 999,
    backgroundColor: '#D6D6D6',
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
});
