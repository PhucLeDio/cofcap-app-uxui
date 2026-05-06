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
    subtext: "#424242",
    icon: "#212121",
  },
  dark: {
    background: "#121212",
    text: "#ffffff",
    subtext: "#E0E0E0",
    icon: "#ffffff",
  },
};

export default function AccountHelpPrivacy() {
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
        <Text style={[styles.title, { color: colors.text }]}>Privacy Policy</Text>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>Last Updated: December 19, 2023</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            Thank you for using CofCap! This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>1. Information We Collect:</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            • Personal Information: When you register, we collect your name, email, and other relevant information.{"\n"}
            • Photos and Data: Plant photos you upload for identification purposes and data related to plant care.{"\n"}
            • Usage Data: Information about how you interact with CofCap.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>2. How We Use Your Information:</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            • Plant Identification: To provide plant identification services.{"\n"}
            • Personalization: Tailor content and recommendations based on your usage.{"\n"}
            • Communication: Send notifications, updates, and respond to support inquiries.{"\n"}
            • Improvement: Analyze data to enhance CofCap's features and user experience.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>3. Information Sharing:</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            • Service Providers: Share data with third-party services for necessary functionality.{"\n"}
            • Legal Compliance: Comply with legal requirements and respond to lawful requests.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>4. Security:</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            • Data Security: Implement measures to protect your data.{"\n"}
            • Access Controls: Limit access to your personal information.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>5. Your Choices:</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            • Notifications: Manage notification preferences in the app settings.{"\n"}
            • Data Deletion: Request deletion of your account and associated data.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>6. Updates:</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            We may update this Privacy Policy. Please review periodically for any changes.
          </Text>
        </View>
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
    gap: 24,
  },
  section: {
    gap: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Urbanist",
    lineHeight: 32,
  },
  bodyText: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Urbanist",
    lineHeight: 28.8, // 160% of 18
  },
});
