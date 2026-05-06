import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  useColorScheme,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { useThemePreference } from "./contexts/theme-preference";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const COLORS = {
  light: {
    background: "#ffffff",
    text: "#212121",
    subtext: "#616161",
    border: "#EEEEEE",
    searchBg: "#FAFAFA",
    searchIcon: "#BDBDBD",
    chipBgActive: "#00A86B",
    chipTextActive: "#FFFFFF",
    chipBorderInactive: "#00A86B",
    chipTextInactive: "#00A86B",
    accordionBg: "#FAFAFA",
    accordionBorder: "#EEEEEE",
    accordionText: "#212121",
    accordionSubtext: "#757575",
    icon: "#212121",
  },
  dark: {
    background: "#121212",
    text: "#ffffff",
    subtext: "#b0b0b0",
    border: "#2a2a2a",
    searchBg: "#1e1e1e",
    searchIcon: "#757575",
    chipBgActive: "#00A86B",
    chipTextActive: "#FFFFFF",
    chipBorderInactive: "#00A86B",
    chipTextInactive: "#00A86B",
    accordionBg: "#1e1e1e",
    accordionBorder: "#2a2a2a",
    accordionText: "#ffffff",
    accordionSubtext: "#b0b0b0",
    icon: "#ffffff",
  },
};

const CATEGORIES = [
  "General",
  "Account",
  "Services",
  "Subscriptions",
  "Troubleshooting",
  "Security & Privacy",
  "Safety & Reporting",
  "Other",
];

const FAQS = [
  {
    question: "What is CofCap?",
    answer: "CofCap is a plant identification and care app for enthusiasts.",
  },
  {
    question: "How does CofCap work?",
    answer: "CofCap uses advanced image recognition AI to identify plants from photos and provides tailored care guides.",
  },
  {
    question: "Is CofCap free to use?",
    answer: "Yes, the basic features including scanning and basic care guides are free. We also offer premium plans for advanced features.",
  },
  {
    question: "What's included in the free version?",
    answer: "You get limited daily plant scans, basic care instructions, and access to the community forums.",
  },
  {
    question: "Can I access CofCap offline?",
    answer: "Currently, an internet connection is required to scan and identify plants.",
  },
  {
    question: "Can I share my plant discoveries?",
    answer: "Yes! You can share your diagnosed plants and care progress with your friends via social media.",
  },
  {
    question: "How do I set up care reminders?",
    answer: "Go to 'My Plants', select a plant, and navigate to the 'Reminders' tab to set up custom watering and fertilizing schedules.",
  },
];

export default function AccountHelpFaq() {
  const router = useRouter();
  const { pref } = useThemePreference();
  const systemColorScheme = useColorScheme();
  const effectiveTheme = pref === "system" ? systemColorScheme : pref;
  const colors = effectiveTheme === "dark" ? COLORS.dark : COLORS.light;

  const [activeCategory, setActiveCategory] = useState("General");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

  const toggleAccordion = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={effectiveTheme === "dark" ? "light" : "dark"} />
      
      {/* Header */}
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>FAQ</Text>
        <View style={{ width: 44 }} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={[styles.searchBar, { backgroundColor: colors.searchBg }]}>
          <Ionicons name="search-outline" size={20} color={colors.searchIcon} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={colors.searchIcon}
            style={[styles.searchInput, { color: colors.text }]}
            editable={false} // Mocked search bar
          />
        </View>
      </View>

      {/* Category Chips */}
      <View style={styles.chipsWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsContainer}>
          {CATEGORIES.map((cat, index) => {
            const isActive = activeCategory === cat;
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.chip,
                  isActive
                    ? { backgroundColor: colors.chipBgActive, borderWidth: 0 }
                    : { backgroundColor: "transparent", borderWidth: 2, borderColor: colors.chipBorderInactive },
                ]}
                onPress={() => setActiveCategory(cat)}
              >
                <Text
                  style={[
                    styles.chipText,
                    isActive ? { color: colors.chipTextActive } : { color: colors.chipTextInactive },
                  ]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* FAQ Accordion List */}
      <ScrollView contentContainerStyle={styles.faqContainer} showsVerticalScrollIndicator={false}>
        {FAQS.map((faq, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <View
              key={index}
              style={[
                styles.accordionItem,
                { backgroundColor: colors.accordionBg, borderColor: colors.accordionBorder },
              ]}
            >
              <TouchableOpacity
                style={styles.accordionHeader}
                onPress={() => toggleAccordion(index)}
                activeOpacity={0.7}
              >
                <Text style={[styles.accordionTitle, { color: colors.accordionText }]}>
                  {faq.question}
                </Text>
                <Ionicons
                  name={isExpanded ? "chevron-up" : "chevron-down"}
                  size={20}
                  color={colors.icon}
                />
              </TouchableOpacity>
              
              {isExpanded && (
                <View style={styles.accordionContent}>
                  <View style={[styles.divider, { backgroundColor: colors.accordionBorder }]} />
                  <Text style={[styles.accordionAnswer, { color: colors.accordionSubtext }]}>
                    {faq.answer}
                  </Text>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  backBtn: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Urbanist",
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 16,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Urbanist",
  },
  chipsWrapper: {
    paddingVertical: 12,
  },
  chipsContainer: {
    paddingHorizontal: 24,
    gap: 12,
  },
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  chipText: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Urbanist",
  },
  faqContainer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 40,
    gap: 20,
  },
  accordionItem: {
    borderWidth: 1,
    borderRadius: 16,
    overflow: "hidden",
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  accordionTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Urbanist",
    marginRight: 16,
  },
  accordionContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  divider: {
    height: 1,
    width: "100%",
    marginBottom: 16,
  },
  accordionAnswer: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Urbanist",
    lineHeight: 24,
  },
});
