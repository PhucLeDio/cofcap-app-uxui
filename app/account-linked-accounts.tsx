import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useColorScheme,
} from "react-native";
import { useThemePreference } from "./contexts/theme-preference";

const COLORS = {
  light: {
    background: "#ffffff",
    text: "#212121",
    subtext: "#616161",
    cardBg: "#FAFAFA",
    border: "#f5f5f5",
    selected: "#00A86B",
  },
  dark: {
    background: "#121212",
    text: "#ffffff",
    subtext: "#b0b0b0",
    cardBg: "#1a1a1a",
    border: "#2a2a2a",
    selected: "#00C878",
  },
};

const SOCIAL_ACCOUNTS = [
  {
    name: "Google",
    status: "Connected",
    icon: "https://www.svgrepo.com/show/303139/google-play-badge-logo.svg",
    color: "#4285F4",
  },
  {
    name: "Apple",
    status: "Connected",
    icon: "https://www.svgrepo.com/show/303135/apple-logo.svg",
    color: "#000000",
  },
  {
    name: "Facebook",
    status: "Connect",
    icon: "https://www.svgrepo.com/show/303114/facebook-3-logo.svg",
    color: "#1877F2",
  },
  {
    name: "Twitter",
    status: "Connect",
    icon: "https://www.svgrepo.com/show/303145/twitter-3-logo.svg",
    color: "#1DA1F2",
  },
];

export default function LinkedAccounts() {
  const router = useRouter();
  const { pref } = useThemePreference();
  const systemColorScheme = useColorScheme();
  const effectiveTheme = pref === "system" ? systemColorScheme : pref;
  const colors = effectiveTheme === "dark" ? COLORS.dark : COLORS.light;

  const isConnected = (status: string) => status === "Connected";

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <StatusBar style={effectiveTheme === "dark" ? "light" : "dark"} />

      <View style={styles.nav}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={22} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>
          Linked Accounts
        </Text>
        <View style={{ width: 44 }} />
      </View>

      <View style={[styles.content, { borderColor: colors.border }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Connect social accounts
        </Text>
        <Text style={[styles.sectionDesc, { color: colors.subtext }]}>
          Link Google, Apple, Facebook, or Twitter for quick sign-in.
        </Text>

        <View style={styles.cardsContainer}>
          {SOCIAL_ACCOUNTS.map((account) => (
            <TouchableOpacity
              key={account.name}
              style={[
                styles.card,
                {
                  backgroundColor: colors.cardBg,
                  borderColor: colors.border,
                },
              ]}
            >
              <View style={styles.cardLeft}>
                <Image
                  source={{ uri: account.icon }}
                  style={[styles.cardIcon, { tintColor: account.color }]}
                />
                <Text style={[styles.cardTitle, { color: colors.text }]}>
                  {account.name}
                </Text>
              </View>
              <Text
                style={[
                  styles.cardStatus,
                  {
                    color: isConnected(account.status)
                      ? colors.selected
                      : "#1976D2",
                  },
                ]}
              >
                {account.status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  backBtn: { width: 44, height: 44, justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "700" },
  content: { flex: 1, padding: 16, gap: 12 },
  sectionTitle: { fontSize: 16, fontWeight: "600" },
  sectionDesc: { fontSize: 14, marginBottom: 12 },
  cardsContainer: { gap: 12 },
  card: {
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  cardIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  cardTitle: { fontSize: 16, fontWeight: "600" },
  cardStatus: { fontWeight: "700", fontSize: 14 },
});
