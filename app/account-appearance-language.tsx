import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
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
    selected: "#00A86B",
    subtext: "#616161",
    optionBg: "#FAFAFA",
  },
  dark: {
    background: "#121212",
    text: "#ffffff",
    border: "#2a2a2a",
    selected: "#00C878",
    subtext: "#b0b0b0",
    optionBg: "#1a1a1a",
  },
};

const LANGUAGES = [
  {
    code: "en-US",
    name: "English (US)",
    flag: "https://flagcdn.com/w80/us.png",
  },
  {
    code: "en-GB",
    name: "English (UK)",
    flag: "https://flagcdn.com/w80/gb.png",
  },
  { code: "zh", name: "Mandarin", flag: "https://flagcdn.com/w80/cn.png" },
  { code: "es", name: "Spanish", flag: "https://flagcdn.com/w80/es.png" },
  { code: "hi", name: "Hindi", flag: "https://flagcdn.com/w80/in.png" },
  { code: "fr", name: "French", flag: "https://flagcdn.com/w80/fr.png" },
  { code: "ar", name: "Arabic", flag: "https://flagcdn.com/w80/ae.png" },
  { code: "ru", name: "Russian", flag: "https://flagcdn.com/w80/ru.png" },
  { code: "ja", name: "Japanese", flag: "https://flagcdn.com/w80/jp.png" },
];

export default function AppAppearanceLanguage() {
  const router = useRouter();
  const { pref } = useThemePreference();
  const systemColorScheme = useColorScheme();
  const effectiveTheme = pref === "system" ? systemColorScheme : pref;
  const colors = effectiveTheme === "dark" ? COLORS.dark : COLORS.light;

  const [selectedLang, setSelectedLang] = React.useState("en-US");

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <StatusBar style={effectiveTheme === "dark" ? "light" : "dark"} />
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={22} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>App Language</Text>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.languagesList}>
          {LANGUAGES.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              style={[
                styles.languageOption,
                {
                  backgroundColor: colors.optionBg,
                  borderColor:
                    selectedLang === lang.code
                      ? colors.selected
                      : colors.border,
                  borderWidth: selectedLang === lang.code ? 2 : 1,
                },
              ]}
              onPress={() => setSelectedLang(lang.code)}
            >
              <Image source={{ uri: lang.flag }} style={styles.flag} />
              <Text style={[styles.languageName, { color: colors.text }]}>
                {lang.name}
              </Text>
              {selectedLang === lang.code && (
                <Ionicons name="checkmark" size={24} color={colors.selected} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
  content: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  languagesList: {
    gap: 16,
  },
  languageOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    gap: 16,
  },
  flag: {
    width: 40,
    height: 30,
    borderRadius: 4,
  },
  languageName: { fontSize: 18, fontWeight: "600", flex: 1 },
});
