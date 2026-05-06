import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
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
    border: "#f5f5f5",
    subtext: "#616161",
  },
  dark: {
    background: "#121212",
    text: "#ffffff",
    border: "#2a2a2a",
    subtext: "#b0b0b0",
  },
};

export default function AppAppearance() {
  const router = useRouter();
  const { pref } = useThemePreference();
  const systemColorScheme = useColorScheme();
  const effectiveTheme = pref === "system" ? systemColorScheme : pref;
  const colors = effectiveTheme === "dark" ? COLORS.dark : COLORS.light;

  const themeLabel =
    pref === "system" ? "System" : pref === "light" ? "Light" : "Dark";

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
          App Appearance
        </Text>
        <View style={{ width: 44 }} />
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.row, { borderColor: colors.border }]}
          onPress={() => router.push("/account-appearance-theme")}
        >
          <Text style={[styles.rowTitle, { color: colors.text }]}>Theme</Text>
          <View style={styles.rowRight}>
            <Text style={[styles.rowValue, { color: colors.subtext }]}>
              {themeLabel}
            </Text>
            <Ionicons name="chevron-forward" size={20} color={colors.subtext} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.row, { borderColor: colors.border }]}
          onPress={() => router.push("/account-appearance-language")}
        >
          <Text style={[styles.rowTitle, { color: colors.text }]}>
            App Language
          </Text>
          <View style={styles.rowRight}>
            <Text style={[styles.rowValue, { color: colors.subtext }]}>
              English (US)
            </Text>
            <Ionicons name="chevron-forward" size={20} color={colors.subtext} />
          </View>
        </TouchableOpacity>
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
  content: { padding: 16 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  rowTitle: { fontSize: 16, fontWeight: "600" },
  rowValue: { fontSize: 14 },
  rowRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
