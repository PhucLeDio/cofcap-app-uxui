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
const TEXT_SECONDARY = "#424242";
const BORDER = "#EEEEEE";

const BENEFITS = [
  "All Monthly Subscription Features.",
  "CofCap Pro Badge.",
  "Quarterly Webinars.",
  "Personalized Recommendations.",
  "20% Discount on Merchandise.",
];

export default function UpgradePlanSuccessScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

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
        <View style={styles.headerAction} />
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 132 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentCard}>
          <View style={styles.confettiWrap}>
            <View style={styles.crownCircle}>
              <Ionicons name="diamond" size={34} color={BRAND_GREEN} />
            </View>
            <View style={[styles.dot, { top: 12, left: 18 }]} />
            <View
              style={[styles.dot, { top: 4, right: 28, width: 6, height: 6 }]}
            />
            <View
              style={[styles.dot, { top: 36, right: 6, width: 5, height: 5 }]}
            />
            <View
              style={[styles.dot, { bottom: 26, left: 6, width: 7, height: 7 }]}
            />
            <View
              style={[
                styles.dot,
                { bottom: 8, right: 24, width: 4, height: 4 },
              ]}
            />
          </View>

          <View style={styles.heroTextWrap}>
            <Text style={styles.heroTitle}>Upgrade Unlocked!</Text>
            <Text style={styles.heroSubtitle}>
              Welcome to Yearly CofCap Pro!
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.sectionWrap}>
            <Text style={styles.sectionTitle}>Benefits Unlocked:</Text>
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

          <Text style={styles.footnote}>
            Thank you for choosing CofCap Pro. Your support helps us grow and
            continue providing the best plant-loving experience.
          </Text>
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
          onPress={() => router.replace("/(tabs)/account")}
        >
          <Text style={styles.ctaText}>OK</Text>
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
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  headerAction: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  contentCard: {
    borderRadius: 12,
    alignItems: "stretch",
    gap: 24,
  },
  confettiWrap: {
    height: 140,
    alignItems: "center",
    justifyContent: "center",
  },
  crownCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#E8F7F0",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: BRAND_GREEN,
    opacity: 0.7,
  },
  heroTextWrap: {
    alignItems: "center",
    gap: 12,
  },
  heroTitle: {
    fontSize: 32,
    lineHeight: 51,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    textAlign: "center",
  },
  heroSubtitle: {
    fontSize: 18,
    lineHeight: 29,
    color: TEXT_SECONDARY,
    textAlign: "center",
  },
  divider: {
    height: 1,
    backgroundColor: BORDER,
  },
  sectionWrap: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 24,
    lineHeight: 38,
    fontWeight: "700",
    color: TEXT_PRIMARY,
    textAlign: "center",
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
  footnote: {
    fontSize: 18,
    lineHeight: 29,
    color: TEXT_SECONDARY,
    textAlign: "center",
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
});
