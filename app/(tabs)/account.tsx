import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BRAND_GREEN = "#00A86B";
const SCREEN_BG = "#FFFFFF";
const TEXT_PRIMARY = "#212121";
const TEXT_SECONDARY = "#757575";
const DIVIDER_COLOR = "#F5F5F5";
const DESTRUCTIVE = "#FF3B30";

type SettingItem = {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  route?: string;
};

const SETTINGS_LIST: SettingItem[] = [
  {
    id: "notifications",
    icon: "notifications-outline",
    title: "Notifications",
    route: "/account-notifications",
  },
  {
    id: "security",
    icon: "shield-checkmark-outline",
    title: "Account & Security",
    route: "/account-security",
  },
  {
    id: "billing",
    icon: "star-outline",
    title: "Billing & Subscriptions",
    route: "/account-billing-subscriptions",
  },
  {
    id: "payment",
    icon: "card-outline",
    title: "Payment Methods",
    route: "/account-payment-methods",
  },
  {
    id: "linked",
    icon: "swap-vertical-outline",
    title: "Linked Accounts",
    route: "/account-linked-accounts",
  },
  {
    id: "appearance",
    icon: "eye-outline",
    title: "App Appearance",
    route: "/account-appearance",
  },
  {
    id: "analytics",
    icon: "analytics-outline",
    title: "Data & Analytics",
    route: "/account-data-analytics",
  },
  { id: "help", icon: "document-text-outline", title: "Help & Support" },
];

export default function AccountScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View
        style={[
          styles.header,
          { paddingTop: Platform.OS === "ios" ? insets.top : 44 },
        ]}
      >
        <View style={styles.headerIcon}>
          <Ionicons name="leaf" size={28} color={BRAND_GREEN} />
        </View>
        <Text style={styles.headerTitle}>Account</Text>
        <View style={styles.headerIcon} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Info */}
        <TouchableOpacity
          style={styles.profileRow}
          activeOpacity={0.7}
          onPress={() => router.push("/account-my-profile")}
        >
          <Image
            source="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80"
            style={styles.avatar}
            contentFit="cover"
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Coffee Capture</Text>
            <Text style={styles.profileEmail}>CofCap@yourdomain.com</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
        </TouchableOpacity>

        {/* Upgrade Banner */}
        <TouchableOpacity
          style={styles.upgradeBanner}
          activeOpacity={0.9}
          onPress={() => router.push("/upgrade-plan")}
        >
          <View style={styles.bannerIconContainer}>
            <Ionicons name="apps" size={24} color={BRAND_GREEN} />
          </View>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Upgrade Plan to Unlock More!</Text>
            <Text style={styles.bannerSubtitle}>
              Enjoy all the benefits and explore more possibilities
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#FFFFFF" />

          {/* Decorative Elements */}
          <View style={styles.decorDot1} />
          <View style={styles.decorDot2} />
          <View style={styles.decorDot3} />
        </TouchableOpacity>

        {/* Settings List */}
        <View style={styles.settingsContainer}>
          {SETTINGS_LIST.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.settingItem}
              activeOpacity={0.7}
              onPress={() => item.route && router.push(item.route)}
            >
              <Ionicons
                name={item.icon}
                size={24}
                color={TEXT_PRIMARY}
                style={styles.settingIcon}
              />
              <Text style={styles.settingTitle}>{item.title}</Text>
              <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={[styles.settingItem, styles.logoutItem]}
          activeOpacity={0.7}
          onPress={() => router.replace("/log-in")}
        >
          <Ionicons
            name="log-out-outline"
            size={24}
            color={DESTRUCTIVE}
            style={styles.settingIcon}
          />
          <Text style={[styles.settingTitle, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: SCREEN_BG,
  },
  headerIcon: {
    width: 44,
    height: 44,
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 20,
    gap: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#F5F5F5",
  },
  profileInfo: {
    flex: 1,
    gap: 4,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  profileEmail: {
    fontSize: 14,
    color: TEXT_SECONDARY,
  },
  upgradeBanner: {
    marginHorizontal: 20,
    marginVertical: 16,
    backgroundColor: BRAND_GREEN,
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    overflow: "hidden", // Contain decorative dots
  },
  bannerIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  bannerTextContainer: {
    flex: 1,
    gap: 4,
    zIndex: 2,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  bannerSubtitle: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: 16,
  },
  decorDot1: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    top: 16,
    left: 12,
    opacity: 0.8,
  },
  decorDot2: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
    bottom: 20,
    left: 40,
    opacity: 0.6,
  },
  decorDot3: {
    position: "absolute",
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#FFFFFF",
    top: 40,
    right: 60,
    opacity: 0.4,
  },
  settingsContainer: {
    marginTop: 8,
    paddingHorizontal: 24,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
  },
  settingIcon: {
    marginRight: 16,
  },
  settingTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: TEXT_PRIMARY,
  },
  logoutItem: {
    paddingHorizontal: 24,
    marginTop: 16,
  },
  logoutText: {
    color: DESTRUCTIVE,
  },
});
