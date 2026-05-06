import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
    ActivityIndicator,
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

const BENEFITS = [
  "All features included in the Monthly Subscription.",
  "CofCap Pro badge for enhanced recognition.",
  "Quarterly webinars with plant experts.",
  "Personalized monthly plant care recommendations.",
  "20% discount on CofCap merchandise.",
];

export default function ProcessingPaymentScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/upgrade-plan-success");
    }, 1800);

    return () => clearTimeout(timer);
  }, [router]);

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
        <Text style={styles.headerTitle}>Review Summary</Text>
        <View style={styles.headerAction} />
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 132 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.planCard}>
          <Text style={styles.planName}>CofCap Pro</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceText}>$49.99</Text>
            <Text style={styles.periodText}>/ year</Text>
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

          <View style={styles.badgeWrap}>
            <Text style={styles.badgeText}>Save 17%</Text>
          </View>
        </View>

        <View style={styles.paymentSection}>
          <Text style={styles.paymentTitle}>Selected Payment Method</Text>
          <View style={styles.paymentCard}>
            <View style={styles.paymentIconWrap}>
              <Ionicons name="card-outline" size={28} color={TEXT_PRIMARY} />
            </View>
            <Text style={styles.paymentLabel}>•••• •••• •••• •••• 4679</Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={[
          styles.bottomBar,
          { paddingBottom: Math.max(insets.bottom, 12) },
        ]}
      >
        <View style={styles.ctaButton}>
          <Text style={styles.ctaText}>Confirm Payment - $4.99</Text>
        </View>
      </View>

      <View style={styles.overlay}>
        <View style={styles.processingCard}>
          <ActivityIndicator size="large" color={BRAND_GREEN} />
          <Text style={styles.processingText}>Processing Payment...</Text>
        </View>
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
    gap: 28,
  },
  planCard: {
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    backgroundColor: CARD_BG,
    padding: 24,
    gap: 24,
    overflow: "hidden",
  },
  planName: {
    fontSize: 20,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 4,
  },
  priceText: {
    fontSize: 48,
    fontWeight: "700",
    lineHeight: 64,
    color: TEXT_PRIMARY,
  },
  periodText: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 30,
    color: TEXT_PRIMARY,
    paddingBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: BORDER,
  },
  benefitsWrap: {
    gap: 16,
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  checkWrap: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E8F7F0",
    alignItems: "center",
    justifyContent: "center",
  },
  benefitText: {
    flex: 1,
    fontSize: 18,
    lineHeight: 29,
    color: TEXT_PRIMARY,
    fontWeight: "500",
  },
  badgeWrap: {
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: BRAND_GREEN,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  paymentSection: {
    gap: 16,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  paymentCard: {
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
  paymentIconWrap: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  paymentLabel: {
    flex: 1,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: BORDER,
    backgroundColor: SCREEN_BG,
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  processingCard: {
    width: "100%",
    maxWidth: 300,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 14,
  },
  processingText: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "600",
    color: TEXT_PRIMARY,
    textAlign: "center",
  },
});
