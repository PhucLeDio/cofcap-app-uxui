import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
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
    cardBg: "#FAFAFA",
    cardBorder: "#EEEEEE",
    iconColor: "#00A86B",
    chevronColor: "#212121",
  },
  dark: {
    background: "#121212",
    text: "#ffffff",
    cardBg: "#1e1e1e",
    cardBorder: "#2a2a2a",
    iconColor: "#00A86B",
    chevronColor: "#ffffff",
  },
};

const CONTACT_OPTIONS = [
  { id: "support", title: "Customer Support", iconType: "ionicon", iconName: "headset-outline" },
  { id: "website", title: "Website", iconType: "ionicon", iconName: "globe-outline" },
  { id: "whatsapp", title: "WhatsApp", iconType: "fontawesome", iconName: "whatsapp" },
  { id: "facebook", title: "Facebook", iconType: "fontawesome", iconName: "facebook-square" },
  { id: "twitter", title: "Twitter", iconType: "fontawesome5", iconName: "twitter" },
  { id: "instagram", title: "Instagram", iconType: "fontawesome", iconName: "instagram" },
];

export default function AccountHelpContact() {
  const router = useRouter();
  const { pref } = useThemePreference();
  const systemColorScheme = useColorScheme();
  const effectiveTheme = pref === "system" ? systemColorScheme : pref;
  const colors = effectiveTheme === "dark" ? COLORS.dark : COLORS.light;

  const renderIcon = (type: string, name: string) => {
    switch (type) {
      case "ionicon":
        return <Ionicons name={name as any} size={24} color={colors.iconColor} />;
      case "fontawesome":
        return <FontAwesome name={name as any} size={24} color={colors.iconColor} />;
      case "fontawesome5":
        return <FontAwesome5 name={name as any} size={24} color={colors.iconColor} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={effectiveTheme === "dark" ? "light" : "dark"} />
      
      {/* Header */}
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>Contact Support</Text>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {CONTACT_OPTIONS.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.card,
              { backgroundColor: colors.cardBg, borderColor: colors.cardBorder },
            ]}
            activeOpacity={0.7}
          >
            <View style={styles.cardLeft}>
              {renderIcon(option.iconType, option.iconName)}
              <Text style={[styles.cardTitle, { color: colors.text }]}>{option.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.chevronColor} />
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
    gap: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Urbanist",
  },
});
