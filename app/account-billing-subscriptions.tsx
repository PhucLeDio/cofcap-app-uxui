import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
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
const TEXT_SECONDARY = "#616161";
const MUTED = "#757575";
const BORDER = "#EEEEEE";
const CARD_BG = "#FAFAFA";

const BENEFITS = [
  "All features included in the Monthly Subscription.",
  "CofCap Pro badge for enhanced recognition.",
  "Quarterly webinars with plant experts.",
  "Personalized monthly plant care recommendations.",
  "20% discount on CofCap merchandise.",
];

export default function AccountBillingSubscriptionsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

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
        <Text style={styles.headerTitle}>Billing &amp; Subscriptions</Text>
        <View style={styles.headerAction} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
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

          <View style={styles.divider} />
          <Text style={styles.currentPlanText}>Your current plan</Text>

          <View style={styles.badgeWrap}>
            <Text style={styles.badgeText}>Save 17%</Text>
          </View>
        </View>

        <Text style={styles.infoText}>
          Your subscription will expire on Dec 23, 2024. Renew or cancel your
          subscription
          <Text style={styles.infoLink}> here</Text>.
        </Text>
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
    gap: 24,
  },
  planCard: {
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    backgroundColor: CARD_BG,
    padding: 24,
    gap: 24,
    position: "relative",
    overflow: "hidden",
  },
  planName: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "700",
    textAlign: "center",
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
    lineHeight: 64,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  periodText: {
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "600",
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
    fontWeight: "500",
    color: TEXT_PRIMARY,
  },
  currentPlanText: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "600",
    color: MUTED,
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
  infoText: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: TEXT_SECONDARY,
  },
  infoLink: {
    color: BRAND_GREEN,
    fontWeight: "500",
  },
});
