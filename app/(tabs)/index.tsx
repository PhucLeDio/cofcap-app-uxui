import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BRAND_GREEN = "#00A86B";
const SCREEN_BG = "#FFFFFF";
const TEXT_PRIMARY = "#212121";
const TEXT_SECONDARY = "#616161";
const FIELD_BG = "#FAFAFA";

const UnsplashPlants = [
  {
    id: "succulents",
    title: "Succulents & Cacti",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80",
  },
  {
    id: "flowering",
    title: "Flowering Plants",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/beautiful-blue-spring-aquilegia-flower-also-known-royalty-free-image-1722883545.jpg?crop=1xw:0.83294xh;center,top",
  },
  {
    id: "foliage",
    title: "Foliage Plants",
    image:
      "https://images.squarespace-cdn.com/content/v1/5811566d20099e23814644fd/1618840898772-U8CIR66HCZ8WI2C7M7UX/dammanns+garden+co+foliage+plants+container+gardening+persian+shield+purple+leaves.jpg",
  },
  {
    id: "trees",
    title: "Trees",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&q=80",
  },
  {
    id: "weeds",
    title: "Weeds & Shrubs",
    image:
      "https://solvepestproblems.oregonstate.edu/sites/default/files/styles/cropped_541x406/public/overlay-images/Weeds-FalseIndigo-Thicket-Bugwood5399928.jpg?itok=4DxSt0iT",
  },
  {
    id: "fruits",
    title: "Fruits",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80",
  },
  {
    id: "vegetables",
    title: "Vegetables",
    image:
      "https://howdyhealth.tamu.edu/wp-content/uploads/2023/11/3-easy-ways-to-eat-more-vegetables.webp",
  },
  {
    id: "herbs",
    title: "Herbs",
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&q=80",
  },
  {
    id: "mushrooms",
    title: "Mushrooms",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
  },
  {
    id: "toxic",
    title: "Toxic Plants",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/purple-foxglove-flowers-in-woodland-torres-del-royalty-free-image-1683583317.jpg?crop=1.00xw:0.668xh;0,0.188xh",
  },
];

const mockArticles = [
  {
    id: "1",
    title: "Unlock the Secrets of Succulents: Care Tips for Thriving Beauties",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
  },
  {
    id: "2",
    title: "The Ultimate Guide to Indoor Plants: From A to Z",
    image:
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800&q=80",
  },
  {
    id: "3",
    title: "Creating a Tranquil Oasis: How to Design Your Zen Garden",
    image:
      "https://images.unsplash.com/photo-1598902506466-9ab62e1c9448?w=800&q=80",
  },
  {
    id: "4",
    title: "Top 10 Air-Purifying Plants for a Healthier Home",
    image:
      "https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?w=800&q=80",
  },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: Platform.OS === "ios" ? insets.top : 44 },
      ]}
    >
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <View style={styles.logoBadge}>
            <Ionicons name="leaf" size={16} color="#FFFFFF" />
          </View>
          <Text style={styles.logoText}>CofCap</Text>
        </View>
        <View style={styles.headerActions}>
          <Link href="/notifications" asChild>
            <Pressable style={styles.iconButton}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={TEXT_PRIMARY}
              />
            </Pressable>
          </Link>
          <Link href="/bookmarks" asChild>
            <Pressable style={styles.iconButton}>
              <Ionicons
                name="bookmark-outline"
                size={24}
                color={TEXT_PRIMARY}
              />
            </Pressable>
          </Link>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <Link href="/search" asChild>
          <Pressable style={styles.searchBar}>
            <Ionicons name="search-outline" size={20} color="#BDBDBD" />
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#BDBDBD" }}>
              Search plants...
            </Text>
          </Pressable>
        </Link>

        {/* Popular Articles */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Articles</Text>
            <Link href="/popular-articles" asChild>
              <Pressable style={styles.viewAllBtn}>
                <Text style={styles.viewAllText}>View All</Text>
                <Ionicons name="arrow-forward" size={16} color={BRAND_GREEN} />
              </Pressable>
            </Link>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScroll}
          >
            {mockArticles.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.id}` as any}
                asChild
              >
                <Pressable style={styles.articleCard}>
                  <Image
                    source={{ uri: article.image }}
                    style={styles.articleImage}
                    contentFit="cover"
                  />
                  <View style={styles.articleContent}>
                    <Text style={styles.articleTitle} numberOfLines={2}>
                      {article.title}
                    </Text>
                    <Ionicons
                      name="bookmark-outline"
                      size={20}
                      color={TEXT_PRIMARY}
                    />
                  </View>
                </Pressable>
              </Link>
            ))}
          </ScrollView>
        </View>

        {/* Ask Plant Expert Banner */}
        <View style={styles.expertBanner}>
          <View style={styles.expertBannerContent}>
            <Text style={styles.expertTitle}>Ask Plant Expert</Text>
            <Text style={styles.expertSubtitle}>
              Our botanists are ready to help with your problems.
            </Text>
            <Link href="/ask-experts" asChild>
              <Pressable style={styles.expertBtn}>
                <Text style={styles.expertBtnText}>Ask the Experts</Text>
                <Ionicons name="arrow-forward" size={14} color="#FFF" />
              </Pressable>
            </Link>
          </View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1591857177580-dc82b9a47a17?w=400&q=80",
            }}
            style={styles.expertImage}
            contentFit="cover"
          />
        </View>

        {/* Explore Plants */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Explore Plants</Text>
            <Link href={"/explore" as any} asChild>
              <Pressable style={styles.viewAllBtn}>
                <Text style={styles.viewAllText}>View All</Text>
                <Ionicons name="arrow-forward" size={16} color={BRAND_GREEN} />
              </Pressable>
            </Link>
          </View>
          <View style={styles.gridContainer}>
            {UnsplashPlants.map((plant) => (
              <Link
                key={plant.id}
                href={
                  `/explore/${plant.id}?title=${encodeURIComponent(plant.title)}` as any
                }
                asChild
              >
                <Pressable style={styles.gridItem}>
                  <Text style={styles.gridTitle} numberOfLines={1}>
                    {plant.title}
                  </Text>
                  <View style={styles.gridImageContainer}>
                    <Image
                      source={{ uri: plant.image }}
                      style={styles.gridImage}
                      contentFit="cover"
                    />
                  </View>
                </Pressable>
              </Link>
            ))}
          </View>
        </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logoBadge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: BRAND_GREEN,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: 24,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  headerActions: {
    flexDirection: "row",
    gap: 16,
  },
  iconButton: {
    padding: 0,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    gap: 32,
    paddingTop: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: FIELD_BG,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: TEXT_PRIMARY,
  },
  section: {
    gap: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  viewAllBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: "700",
    color: BRAND_GREEN,
  },
  horizontalScroll: {
    gap: 16,
    paddingRight: 24, // Optional so it scrolls past screen
  },
  articleCard: {
    width: 260,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
  },
  articleImage: {
    width: "100%",
    height: 160,
    borderRadius: 16,
    backgroundColor: "#EEEEEE",
  },
  articleContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 12,
    gap: 12,
  },
  articleTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: TEXT_PRIMARY,
    lineHeight: 26,
  },
  expertBanner: {
    flexDirection: "row",
    backgroundColor: FIELD_BG,
    borderRadius: 20,
    overflow: "hidden",
    padding: 20,
    alignItems: "center",
  },
  expertBannerContent: {
    flex: 1,
    gap: 8,
  },
  expertTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  expertSubtitle: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    lineHeight: 20,
    paddingRight: 10,
    marginBottom: 8,
  },
  expertBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: BRAND_GREEN,
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    gap: 6,
  },
  expertBtnText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },
  expertImage: {
    width: 90,
    height: 100,
    borderRadius: 12,
    backgroundColor: "#E0E0E0",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "space-between",
  },
  gridItem: {
    width: "47%",
    backgroundColor: FIELD_BG,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 0,
    alignItems: "flex-start",
    gap: 12,
    minHeight: 130,
    overflow: "hidden",
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: TEXT_PRIMARY,
    textAlign: "left",
  },
  gridImageContainer: {
    width: "100%",
    height: 90,
    alignSelf: "flex-end",
    overflow: "hidden",
    borderRadius: 8,
  },
  gridImage: {
    width: "100%",
    height: "100%",
  },
});
