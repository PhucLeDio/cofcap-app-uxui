import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    Platform,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BRAND_GREEN = "#00A86B";
const SCREEN_BG = "#FFFFFF";
const TEXT_PRIMARY = "#212121";
const TEXT_SECONDARY = "#616161";
const DANGER = "#E53935";

const TOGGLES = [
  "Biometric ID",
  "Face ID",
  "SMS Authenticator",
  "Google Authenticator",
];

const DEFAULTS: Record<string, boolean> = {
  "Biometric ID": false,
  "Face ID": false,
  "SMS Authenticator": false,
  "Google Authenticator": false,
};

const ACTIONS = [
  {
    title: "Device Management",
    description: "Manage your account on the various devices you own.",
    danger: false,
  },
  {
    title: "Deactivate Account",
    description:
      "Temporarily deactivate your account. Easily reactivate when you're ready.",
    danger: false,
  },
  {
    title: "Delete Account",
    description:
      "Permanently remove your account and data. Proceed with caution.",
    danger: true,
  },
];

export default function AccountSecurityScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [values, setValues] = useState(DEFAULTS);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View
        style={[
          styles.header,
          { paddingTop: Platform.OS === "ios" ? insets.top : 44 },
        ]}
      >
        <TouchableOpacity
          style={styles.headerAction}
          activeOpacity={0.8}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account &amp; Security</Text>
        <View style={styles.headerAction} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.group}>
          {TOGGLES.map((label) => (
            <View key={label} style={styles.row}>
              <Text style={styles.rowLabel}>{label}</Text>
              <Switch
                value={values[label]}
                trackColor={{ false: "#E0E0E0", true: "#C6F1E2" }}
                thumbColor={values[label] ? BRAND_GREEN : "#FFFFFF"}
                onValueChange={(next) =>
                  setValues((prev) => ({ ...prev, [label]: next }))
                }
              />
            </View>
          ))}

          <TouchableOpacity style={styles.row} activeOpacity={0.75}>
            <Text style={styles.rowLabel}>Change Password</Text>
            <Ionicons name="chevron-forward" size={20} color="#9E9E9E" />
          </TouchableOpacity>
        </View>

        <View style={styles.group}>
          {ACTIONS.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={styles.actionRow}
              activeOpacity={0.75}
            >
              <View style={styles.actionTextWrap}>
                <Text
                  style={[
                    styles.actionTitle,
                    item.danger && styles.actionDanger,
                  ]}
                >
                  {item.title}
                </Text>
                <Text style={styles.actionDesc}>{item.description}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9E9E9E" />
            </TouchableOpacity>
          ))}
        </View>
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
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  headerAction: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
    gap: 28,
  },
  group: {
    gap: 20,
  },
  row: {
    minHeight: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  rowLabel: {
    flex: 1,
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "600",
    color: TEXT_PRIMARY,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  actionTextWrap: {
    flex: 1,
    gap: 6,
  },
  actionTitle: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "600",
    color: TEXT_PRIMARY,
  },
  actionDanger: {
    color: DANGER,
  },
  actionDesc: {
    fontSize: 16,
    lineHeight: 26,
    color: TEXT_SECONDARY,
  },
});
