import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#616161';
const FIELD_BG = '#FAFAFA';
const FIELD_PLACEHOLDER = '#9E9E9E';

const ARROW_LEFT_URL = 'https://www.figma.com/api/mcp/asset/4f2d8b7d-b9dd-4e83-8098-99169944a29c';
const LOCK_ICON_URL = 'https://www.figma.com/api/mcp/asset/a0f99c0b-33b9-4e93-8429-138090dbd11b';
const HIDE_ICON_URL = 'https://www.figma.com/api/mcp/asset/c60c17be-cc01-4baa-b640-1dab40f0e608';

export default function CreateNewPasswordScreen() {
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
          <Text style={styles.title}>Secure Your Account 🔒</Text>
          <Text style={styles.subtitle}>
            Almost there! Create a new password for your CofCap account to keep it secure. Remember to choose a strong and unique password.
          </Text>
        </View>

        <View style={styles.formSection}>
          <View style={styles.fieldBlock}>
            <Text style={styles.fieldLabel}>New Password</Text>
            <View style={styles.field}>
              <Image source={{ uri: LOCK_ICON_URL }} style={styles.fieldIcon} contentFit="contain" />
              <TextInput
                placeholder="●●●●●●●●●●●●"
                placeholderTextColor={FIELD_PLACEHOLDER}
                style={styles.input}
                secureTextEntry
              />
              <Image source={{ uri: HIDE_ICON_URL }} style={styles.fieldIcon} contentFit="contain" />
            </View>
          </View>

          <View style={styles.fieldBlock}>
            <Text style={styles.fieldLabel}>Confirm New Password</Text>
            <View style={styles.field}>
              <Image source={{ uri: LOCK_ICON_URL }} style={styles.fieldIcon} contentFit="contain" />
              <TextInput
                placeholder="●●●●●●●●●●●●"
                placeholderTextColor={FIELD_PLACEHOLDER}
                style={styles.input}
                secureTextEntry
              />
              <Image source={{ uri: HIDE_ICON_URL }} style={styles.fieldIcon} contentFit="contain" />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.button} onPress={() => router.push('/log-in')}>
          <Text style={styles.buttonText}>Save New Password</Text>
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
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 36,
    backgroundColor: '#FFFFFF',
  },
  button: {
    borderRadius: 1000,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BRAND_GREEN,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.2,
  },
});
