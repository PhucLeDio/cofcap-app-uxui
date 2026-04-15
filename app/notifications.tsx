import { StyleSheet, Text, View, ScrollView, Pressable, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#616161';
const DIVIDER_COLOR = '#EEEEEE';
const ICON_BG = '#FAFAFA';

const notifications = [
  {
    id: '1',
    title: 'Account Security Alert 🔒',
    description: "We've noticed some unusual activity on your account. Please review your recent logins and update your password if necessary.",
    time: '09:41 AM',
    unread: true,
    icon: 'shield-checkmark-outline',
    dateGroup: 'Today',
  },
  {
    id: '2',
    title: 'System Update Available 🔄',
    description: 'A new system update is ready for installation. It includes performance improvements and bug fixes.',
    time: '08:46 AM',
    unread: true,
    icon: 'information-circle-outline',
    dateGroup: 'Today',
  },
  {
    id: '3',
    title: 'Password Reset Successful ✅',
    description: "Your password has been successfully reset. If you didn't request this change, please contact support immediately.",
    time: '20:30 PM',
    unread: false,
    icon: 'lock-closed-outline',
    dateGroup: 'Yesterday',
  },
  {
    id: '4',
    title: 'Exciting New Feature 🆕',
    description: "We've just launched a new feature that will enhance your user experience. Check it out now!",
    time: '16:29 PM',
    unread: false,
    icon: 'star-outline',
    dateGroup: 'Yesterday',
  },
  {
    id: '5',
    title: 'Event Reminder 📅',
    description: "Don't forget about the special event tomorrow at 3 PM. We can't wait to see you there!",
    time: '10:54 AM',
    unread: false,
    icon: 'calendar-outline',
    dateGroup: 'Yesterday',
  },
];

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  let lastGroup = ''; // To track section dividers

  return (
    <View style={[styles.container, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </Pressable>
        <Text style={styles.headerTitle}>Notification</Text>
        <Pressable style={styles.iconButton}>
          <Ionicons name="settings-outline" size={24} color={TEXT_PRIMARY} />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {notifications.map((item, index) => {
          const showGroup = item.dateGroup !== lastGroup && item.dateGroup !== 'Today';
          lastGroup = item.dateGroup;

          return (
            <View key={item.id}>
              {/* Divider if date changes to Yesterday */}
              {showGroup && (
                <View style={styles.dividerContainer}>
                  <Text style={styles.dividerText}>{item.dateGroup}</Text>
                  <View style={styles.dividerLine} />
                </View>
              )}

              {/* Notification Item */}
              <TouchableOpacity activeOpacity={0.6} style={styles.notificationItem}>
                {/* Left Icon */}
                <View style={styles.iconCircle}>
                  <Ionicons name={item.icon as any} size={24} color={TEXT_PRIMARY} />
                </View>

                {/* Content */}
                <View style={styles.contentContainer}>
                  <View style={styles.titleRow}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    {item.unread && <View style={styles.unreadDot} />}
                    <Ionicons name="chevron-forward" size={18} color="#9E9E9E" />
                  </View>
                  <Text style={styles.descriptionText}>{item.description}</Text>
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  iconButton: {
    padding: 8,
    marginHorizontal: -8, // Expand tap area
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  scrollContent: {
    paddingBottom: 40,
    paddingTop: 8,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginVertical: 16,
    gap: 16,
  },
  dividerText: {
    fontSize: 14,
    color: '#9E9E9E',
    fontWeight: '500',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: DIVIDER_COLOR,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 16,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: ICON_BG,
    borderWidth: 1,
    borderColor: DIVIDER_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    gap: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  titleText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: TEXT_PRIMARY,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: BRAND_GREEN,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: TEXT_SECONDARY,
  },
  timeText: {
    fontSize: 12,
    color: '#9E9E9E',
    marginTop: 4,
  },
});
