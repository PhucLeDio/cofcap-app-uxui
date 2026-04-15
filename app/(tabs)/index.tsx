import { Image } from 'expo-image';
import { StyleSheet, Text, TextInput, View, ScrollView, Pressable, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#616161';
const FIELD_BG = '#FAFAFA';

const UnsplashPlants = [
  { id: '1', title: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80' },
  { id: '2', title: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1490750967868-88cb44cb2754?w=400&q=80' },
  { id: '3', title: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1542838384-3c6607bbdcab?w=400&q=80' },
  { id: '4', title: 'Trees', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&q=80' },
  { id: '5', title: 'Weeds & Shrubs', image: 'https://images.unsplash.com/photo-1596700078737-0130f40d6945?w=400&q=80' },
  { id: '6', title: 'Fruits', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80' },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
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
              <Ionicons name="notifications-outline" size={24} color={TEXT_PRIMARY} />
            </Pressable>
          </Link>
          <Pressable style={styles.iconButton}>
            <Ionicons name="bookmark-outline" size={24} color={TEXT_PRIMARY} />
          </Pressable>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#BDBDBD" />
          <TextInput 
            placeholder="Search plants..." 
            placeholderTextColor="#BDBDBD"
            style={styles.searchInput}
          />
        </View>

        {/* Popular Articles */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Articles</Text>
            <Pressable style={styles.viewAllBtn}>
              <Text style={styles.viewAllText}>View All</Text>
              <Ionicons name="arrow-forward" size={16} color={BRAND_GREEN} />
            </Pressable>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
             <View style={styles.articleCard}>
               <Image source={{uri: 'https://images.unsplash.com/photo-1416879598056-0cbb04922ca4?w=800&q=80'}} style={styles.articleImage} contentFit="cover" />
               <View style={styles.articleContent}>
                 <Text style={styles.articleTitle} numberOfLines={2}>Unlock the Secrets of Succulents: Care Tips...</Text>
                 <Ionicons name="bookmark-outline" size={20} color={TEXT_PRIMARY} />
               </View>
             </View>
             <View style={styles.articleCard}>
               <Image source={{uri: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800&q=80'}} style={styles.articleImage} contentFit="cover" />
               <View style={styles.articleContent}>
                 <Text style={styles.articleTitle} numberOfLines={2}>The Ultimate Guide to Indoor Plants...</Text>
                 <Ionicons name="bookmark-outline" size={20} color={TEXT_PRIMARY} />
               </View>
             </View>
          </ScrollView>
        </View>

        {/* Ask Plant Expert Banner */}
        <View style={styles.expertBanner}>
           <View style={styles.expertBannerContent}>
              <Text style={styles.expertTitle}>Ask Plant Expert</Text>
              <Text style={styles.expertSubtitle}>Our botanists are ready to help with your problems.</Text>
              <Pressable style={styles.expertBtn}>
                <Text style={styles.expertBtnText}>Ask the Experts</Text>
                <Ionicons name="arrow-forward" size={14} color="#FFF" />
              </Pressable>
           </View>
           <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1591857177580-dc82b9a47a17?w=400&q=80' }} 
              style={styles.expertImage} 
              contentFit="cover" 
           />
        </View>

        {/* Explore Plants */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Explore Plants</Text>
            <Pressable style={styles.viewAllBtn}>
              <Text style={styles.viewAllText}>View All</Text>
              <Ionicons name="arrow-forward" size={16} color={BRAND_GREEN} />
            </Pressable>
          </View>
          <View style={styles.gridContainer}>
            {UnsplashPlants.map((plant) => (
               <View key={plant.id} style={styles.gridItem}>
                 <Text style={styles.gridTitle} numberOfLines={1}>{plant.title}</Text>
                 <View style={styles.gridImageContainer}>
                  <Image source={{uri: plant.image}} style={styles.gridImage} contentFit="cover" />
                 </View>
               </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoBadge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: BRAND_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  headerActions: {
    flexDirection: 'row',
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: FIELD_BG,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: TEXT_PRIMARY,
  },
  section: {
    gap: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: '700',
    color: BRAND_GREEN,
  },
  horizontalScroll: {
    gap: 16,
    paddingRight: 24, // Optional so it scrolls past screen
  },
  articleCard: {
    width: 260,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
  },
  articleImage: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    backgroundColor: '#EEEEEE',
  },
  articleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 12,
    gap: 12,
  },
  articleTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: TEXT_PRIMARY,
    lineHeight: 26,
  },
  expertBanner: {
    flexDirection: 'row',
    backgroundColor: FIELD_BG,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 20,
    alignItems: 'center',
  },
  expertBannerContent: {
    flex: 1,
    gap: 8,
  },
  expertTitle: {
    fontSize: 18,
    fontWeight: '700',
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BRAND_GREEN,
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    gap: 6,
  },
  expertBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  expertImage: {
    width: 90,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#E0E0E0',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '47%',
    backgroundColor: FIELD_BG,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 0,
    alignItems: 'center',
    gap: 12,
    minHeight: 120,
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: TEXT_PRIMARY,
    textAlign: 'center',
  },
  gridImageContainer: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    overflow: 'hidden',
  },
  gridImage: {
    width: 60,
    height: 80,
    bottom: -10,
  },
});
