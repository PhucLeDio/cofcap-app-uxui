import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
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
const TEXT_SECONDARY = "#757575";
const BORDER = "#EEEEEE";
const CHIP_BG = "#F5F5F5";

type PlanType = "monthly" | "yearly";

type PlanConfig = {
  price: string;
  period: string;
  cta: string;
};

const PLAN_CONTENT: Record<PlanType, PlanConfig> = {
  monthly: {
    price: "$4.99",
    period: "/ month",
    cta: "Continue - $4.99",
  },
  yearly: {
    price: "$49.99",
    period: "/ year",
    cta: "Continue - $49.99",
  },
};

const BENEFITS = [
  "Full access to advanced plant identification features.",
  "Unlimited access to premium articles and in-depth plant care guides.",
  "Exclusive access to expert Q&A for plant-related queries.",
  "Priority customer support.",
  "10% discount on CofCap merchandise.",
];

export default function UpgradePlanScreen() {
  const [planType, setPlanType] = useState<PlanType>("monthly");
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const plan = useMemo(() => PLAN_CONTENT[planType], [planType]);

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
        <Text style={styles.headerTitle}>Upgrade Plan</Text>
        <View style={styles.headerAction} />
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 132 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.tabWrap}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              planType === "monthly" && styles.tabButtonActive,
            ]}
            activeOpacity={0.85}
            onPress={() => setPlanType("monthly")}
          >
            <Text
              style={[
                styles.tabText,
                planType === "monthly" && styles.tabTextActive,
              ]}
            >
              Monthly
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              planType === "yearly" && styles.tabButtonActive,
            ]}
            activeOpacity={0.85}
            onPress={() => setPlanType("yearly")}
          >
            <Text
              style={[
                styles.tabText,
                planType === "yearly" && styles.tabTextActive,
              ]}
            >
              Yearly
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.planCard}>
          <Text style={styles.planName}>CofCap Pro</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceText}>{plan.price}</Text>
            <Text style={styles.periodText}>{plan.period}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.benefitsWrap}>
            {BENEFITS.map((benefit) => (
              <View key={benefit} style={styles.benefitRow}>
                <View style={styles.checkWrap}>
                  <Ionicons name="checkmark" size={16} color={BRAND_GREEN} />
                </View>
                <Text style={styles.benefitText}>{benefit}</Text>
              </View>
            ))}
          </View>
        </View>
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
          onPress={() => router.push("/select-payment-method")}
        >
          <Text style={styles.ctaText}>{plan.cta}</Text>
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
    fontSize: 24,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 12,
    gap: 24,
  },
  tabWrap: {
    backgroundColor: CHIP_BG,
    borderRadius: 8,
    padding: 6,
    flexDirection: "row",
    gap: 8,
  },
  tabButton: {
    flex: 1,
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tabButtonActive: {
    backgroundColor: BRAND_GREEN,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  tabTextActive: {
    color: "#FFFFFF",
  },
  planCard: {
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    backgroundColor: "#FAFAFA",
    padding: 24,
    gap: 24,
  },
  planName: {
    fontSize: 24,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  priceText: {
    fontSize: 42,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    lineHeight: 48,
  },
  periodText: {
    fontSize: 18,
    fontWeight: "600",
    color: TEXT_PRIMARY,
    paddingBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: BORDER,
  },
  benefitsWrap: {
    gap: 14,
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  checkWrap: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#E8F7F0",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  benefitText: {
    flex: 1,
    fontSize: 17,
    lineHeight: 27,
    color: TEXT_PRIMARY,
    fontWeight: "500",
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
