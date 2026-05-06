import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  useColorScheme,
} from "react-native";
import { useThemePreference } from "./contexts/theme-preference";

const COLORS = {
  light: {
    background: "#ffffff",
    text: "#212121",
    border: "#f5f5f5",
    subtext: "#616161",
    icon: "#212121",
  },
  dark: {
    background: "#121212",
    text: "#ffffff",
    border: "#2a2a2a",
    subtext: "#b0b0b0",
    icon: "#ffffff",
  },
};

const MENU_ITEMS = [
  { title: "FAQ", route: "/account-help-faq" },
  { title: "Contact Support", route: "/account-help-contact" },
  { title: "Privacy Policy", route: "/account-help-privacy" },
  { title: "Terms of Service", route: "/account-help-terms" },
  { title: "Partner", route: null },
  { title: "Job Vacancy", route: null },
  { title: "Accessibility", route: null },
  { title: "Feedback", route: null },
  { title: "About us", route: null },
  { title: "Rate us", route: null },
  { title: "Visit Our Website", route: null },
  { title: "Follow us on Social Media", route: null },
];

export default function AccountHelpSupport() {
  const router = useRouter();
  const { pref } = useThemePreference();
  const systemColorScheme = useColorScheme();
  const effectiveTheme = pref === "system" ? systemColorScheme : pref;
  const colors = effectiveTheme === "dark" ? COLORS.dark : COLORS.light;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={effectiveTheme === "dark" ? "light" : "dark"} />
      
      {/* Header */}
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>Help & Support</Text>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {MENU_ITEMS.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.row}
            onPress={() => {
              if (item.route) {
                router.push(item.route as any);
              }
            }}
          >
            <Text style={[styles.rowTitle, { color: colors.text }]}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.icon} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  backBtn: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Urbanist",
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  rowTitle: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Urbanist",
  },
});
