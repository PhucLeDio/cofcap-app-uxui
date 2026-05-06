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

const INITIAL_VALUES: Record<string, boolean> = {
  "Plant Updates": true,
  "Care Reminders": true,
  "Subscription Alerts": true,
  "Community Engagement": false,
  "Account Updates": true,
  "Security Alerts": true,
  "Content Recommendations": true,
  "Interaction Alerts": false,
  "Account Activity Summary": true,
  "Customer Support Updates": false,
  "Feedback & Updates": false,
};

const ITEMS = Object.keys(INITIAL_VALUES);

export default function AccountNotificationsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [values, setValues] = useState(INITIAL_VALUES);

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
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.headerAction} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {ITEMS.map((label) => (
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
});
