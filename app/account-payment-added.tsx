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

export default function PaymentAdded() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.content}>
        <View style={styles.iconWrap}>
          <Ionicons name="checkmark-circle" size={72} color="#00A86B" />
        </View>
        <Text style={styles.title}>New payment method added</Text>
        <Text style={styles.desc}>
          Your card •••• 4679 has been added successfully.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/account-payment-methods")}
        >
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 12,
  },
  iconWrap: { marginBottom: 8 },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    textAlign: "center",
  },
  desc: { fontSize: 14, color: "#616161", textAlign: "center" },
  button: {
    marginTop: 20,
    backgroundColor: "#00A86B",
    padding: 12,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "700" },
});
