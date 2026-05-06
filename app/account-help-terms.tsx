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

export default function AccountHelpTerms() {
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
        <Text style={[styles.title, { color: colors.text }]}>Terms of Service</Text>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>Last Updated: December 20, 2023</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            Welcome to CofCap! By using our services, you agree to the following terms:
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>1. Use of CofCap:</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            • You must be at least 13 years old to use CofCap.{"\n"}
            • You are responsible for maintaining the confidentiality of your account.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>2. User Conduct:</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            • Do not engage in any activity that disrupts or interferes with CofCap's functionality.{"\n"}
            • Respect the privacy and rights of other users.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>3. Intellectual Property:</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            • CofCap owns all rights, title, and interest in the app's content and features.{"\n"}
            • Do not use, modify, or distribute our content without permission.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>4. Subscription and Payments:</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            • Subscriptions auto-renew unless canceled.{"\n"}
            • Payment information is processed securely through authorized payment providers.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>5. Termination:</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            CofCap reserves the right to terminate accounts for violations of terms.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>6. Limitation of Liability:</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            CofCap is not liable for any damages arising from the use of our services.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>7. Changes to Terms:</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            We may update these Terms of Service. Check for changes periodically.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: colors.text }]}>8. Governing Law:</Text>
          <Text style={[styles.bodyText, { color: colors.subtext }]}>
            These terms are governed by the laws of [Jurisdiction].
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
    lineHeight: 28.8,
  },
});
