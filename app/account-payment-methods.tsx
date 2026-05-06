import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const TEXT_PRIMARY = "#212121";

export default function PaymentMethods() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.nav}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={22} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.title}>Payment Methods</Text>
        <View style={{ width: 44 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{"•••• •••• •••• 4679"}</Text>
          <Text style={styles.cardStatus}>Connected</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Google Pay</Text>
          <Text style={styles.cardStatus}>Connected</Text>
        </View>

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => router.push("/account-add-payment")}
        >
          <Ionicons name="add" size={18} color="#fff" />
          <Text style={styles.addText}>Add new payment</Text>
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
  content: { padding: 16 },
  card: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: { fontSize: 16, fontWeight: "600", color: TEXT_PRIMARY },
  cardStatus: { color: "#00A86B", fontWeight: "700" },
  addBtn: {
    marginTop: 18,
    backgroundColor: "#00A86B",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  addText: { color: "#fff", fontWeight: "700" },
});
