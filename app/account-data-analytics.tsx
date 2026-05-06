import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const TEXT_PRIMARY = "#212121";

export default function DataAnalytics() {
  const router = useRouter();
  const [adPref, setAdPref] = useState(true);
  const [dataUsage, setDataUsage] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.nav}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={22} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.title}>Data & Analytics</Text>
        <View style={{ width: 44 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <View>
            <Text style={styles.rowTitle}>Data Usage</Text>
            <Text style={styles.rowDesc}>
              Control how your data is used for analytics.
            </Text>
          </View>
          <Switch value={dataUsage} onValueChange={setDataUsage} />
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.rowTitle}>Ad Preferences</Text>
            <Text style={styles.rowDesc}>
              Manage ad personalization settings.
            </Text>
          </View>
          <Switch value={adPref} onValueChange={setAdPref} />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  backBtn: { width: 44, height: 44, justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "700", color: TEXT_PRIMARY },
  content: { padding: 16, gap: 12 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  rowTitle: { fontSize: 16, fontWeight: "600", color: TEXT_PRIMARY },
  rowDesc: { fontSize: 13, color: "#616161" },
  button: {
    marginTop: 24,
    backgroundColor: "#00A86B",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "700" },
});
