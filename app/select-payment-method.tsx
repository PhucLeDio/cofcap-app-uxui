import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BRAND_GREEN = "#00A86B";
const SCREEN_BG = "#FFFFFF";
const TEXT_PRIMARY = "#212121";
const BORDER = "#EEEEEE";
const CARD_BG = "#FAFAFA";

type PaymentMethod = {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const PAYMENT_METHODS: PaymentMethod[] = [
  { id: "paypal", label: "PayPal", icon: "logo-paypal" },
  { id: "google-pay", label: "Google Pay", icon: "logo-google" },
  { id: "apple-pay", label: "Apple Pay", icon: "logo-apple" },
  { id: "card-4679", label: "•••• •••• •••• •••• 4679", icon: "card-outline" },
  { id: "card-5567", label: "•••• •••• •••• •••• 5567", icon: "card-outline" },
  { id: "card-8456", label: "•••• •••• •••• •••• 8456", icon: "card-outline" },
];

export default function SelectPaymentMethodScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState("card-4679");

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
          activeOpacity={0.7}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Payment Method</Text>
        <View style={styles.headerAction} />
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 132 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {PAYMENT_METHODS.map((item) => {
          const isSelected = selectedMethod === item.id;

          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.methodRow, isSelected && styles.methodRowSelected]}
              activeOpacity={0.85}
              onPress={() => setSelectedMethod(item.id)}
            >
              <View style={styles.methodIconWrap}>
                <Ionicons name={item.icon} size={28} color={TEXT_PRIMARY} />
              </View>
              <Text style={styles.methodLabel}>{item.label}</Text>
              {isSelected ? (
                <View style={styles.checkWrap}>
                  <Ionicons name="checkmark" size={14} color="#FFFFFF" />
                </View>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View
        style={[
          styles.bottomBar,
          { paddingBottom: Math.max(insets.bottom, 12) },
        ]}
      >
        <TouchableOpacity
          style={styles.ctaButton}
          activeOpacity={0.9}
          onPress={() => router.push("/review-summary")}
        >
          <Text style={styles.ctaText}>Continue</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: SCREEN_BG,
  },
  headerAction: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    textAlign: "center",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 12,
    gap: 20,
  },
  methodRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: CARD_BG,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  methodRowSelected: {
    borderWidth: 2,
    borderColor: BRAND_GREEN,
  },
  methodIconWrap: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  methodLabel: {
    flex: 1,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  checkWrap: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: BRAND_GREEN,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: BORDER,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  ctaButton: {
    backgroundColor: BRAND_GREEN,
    borderRadius: 999,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
