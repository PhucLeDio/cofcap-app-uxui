import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#616161';
const TEXT_MUTED = '#9E9E9E';
const FIELD_BG = '#FAFAFA';

const ARROW_LEFT_URL = 'https://img.icons8.com/ios-filled/50/000000/left.png';
const BACKSPACE_ICON_URL = 'https://img.icons8.com/ios-filled/50/000000/clear-symbol.png';

function KeypadButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable style={styles.keypadButton} onPress={onPress}>
      <Text style={styles.keypadButtonText}>{label}</Text>
    </Pressable>
  );
}

export default function EnterOtpScreen() {
  const [otp, setOtp] = useState('');

  useEffect(() => {
    if (otp.length === 4) {
      const timer = setTimeout(() => {
        router.push('/create-new-password');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [otp]);

  const handlePress = (val: string) => {
    if (val === 'backspace') {
      setOtp((prev) => prev.slice(0, -1));
    } else {
      setOtp((prev) => (prev.length < 4 ? prev + val : prev));
    }
  };

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
          {[0, 1, 2, 3].map((index) => {
            const digit = otp[index];
            const isActive = otp.length === index;
            const isFilled = digit !== undefined;

            if (isActive) {
              return (
                <View key={index} style={styles.pinActive}>
                  <Text style={styles.pinActiveText}>{digit || ''}</Text>
                </View>
              );
            }
            if (isFilled) {
              return (
                <View key={index} style={styles.pinFilled}>
                  <Text style={styles.pinFilledText}>{digit}</Text>
                </View>
              );
            }
            return <View key={index} style={styles.pinEmpty} />;
          })}
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
          <KeypadButton label="1" onPress={() => handlePress('1')} />
          <KeypadButton label="2" onPress={() => handlePress('2')} />
          <KeypadButton label="3" onPress={() => handlePress('3')} />
        </View>
        <View style={styles.keyboardRow}>
          <KeypadButton label="4" onPress={() => handlePress('4')} />
          <KeypadButton label="5" onPress={() => handlePress('5')} />
          <KeypadButton label="6" onPress={() => handlePress('6')} />
        </View>
        <View style={styles.keyboardRow}>
          <KeypadButton label="7" onPress={() => handlePress('7')} />
          <KeypadButton label="8" onPress={() => handlePress('8')} />
          <KeypadButton label="9" onPress={() => handlePress('9')} />
        </View>
        <View style={styles.keyboardRow}>
          <KeypadButton label="*" onPress={() => {}} />
          <KeypadButton label="0" onPress={() => handlePress('0')} />
          <Pressable style={styles.keypadButton} onPress={() => handlePress('backspace')}>
            <Image source={{ uri: BACKSPACE_ICON_URL }} style={styles.backspaceIcon} contentFit="contain" />
          </Pressable>
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
