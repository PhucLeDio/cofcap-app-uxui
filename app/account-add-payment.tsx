import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const TEXT_PRIMARY = "#212121";

export default function AddPayment() {
  const router = useRouter();
  const [card, setCard] = useState("");
  const [name, setName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={22} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.title}>Add New Payment</Text>
        <View style={{ width: 44 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Card Number</Text>
        <TextInput
          value={card}
          onChangeText={setCard}
          style={styles.input}
          placeholder="2640 4763 7569 8456"
        />

        <Text style={styles.label}>Account Holder Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Coffee Capture"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/account-payment-added")}
        >
          <Text style={styles.buttonText}>Add Payment</Text>
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
  label: { fontSize: 13, color: "#616161", marginTop: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#EEE",
    padding: 12,
    borderRadius: 10,
    marginTop: 8,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#00A86B",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "700" },
});
