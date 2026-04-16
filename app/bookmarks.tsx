import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import { useState } from 'react';
import { Image } from 'expo-image';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#616161';
const DIVIDER_COLOR = '#EEEEEE';
const FIELD_BG = '#FAFAFA';

const mockPlants = [
  { id: '1', title: 'Prayer Plant', subtitle: 'Goeppertia orbifolia', category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1616628188550-808682f392ce?w=400&q=80' },
  { id: '2', title: 'Desert Agave', subtitle: 'Agave deserti', category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1510860555711-2e2e8acac19b?w=400&q=80' },
  { id: '3', title: 'Peacock Plant', subtitle: 'Goeppertia makoyana', category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1622359556111-e6e2a875a6c6?w=400&q=80' },
  { id: '4', title: 'Aloe Vera', subtitle: 'Aloe vera', category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1596547609652-9fc5b80a6baf?w=400&q=80' },
  { id: '5', title: 'Night-Blooming Cereus', subtitle: 'Acanthocereus tetragonus', category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1551893665-f843f600794e?w=400&q=80' },
];

const mockArticles = [
  { id: '1', title: 'Unlock the Secrets of Succulents: Care Tips for Thriving Beauties', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80' },
  { id: '2', title: 'Plant Parenthood: Choosing the Perfect Plant for Your Lifestyle', image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400&q=80' },
  { id: '3', title: 'Creating a Tranquil Oasis: How to Design Your Zen Garden', image: 'https://images.unsplash.com/photo-1598902506466-9ab62e1c9448?w=400&q=80' },
];

export default function BookmarksScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Plants');

  return (
    <View style={[styles.container, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton} activeOpacity={0.6}>
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Bookmarks</Text>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
          <Ionicons name="search-outline" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
      </View>

      {/* Segmented Control Tabs */}
      <View style={styles.tabContainer}>
        <View style={styles.tabBackground}>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'Plants' && styles.activeTabButton]} 
            onPress={() => setActiveTab('Plants')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeTab === 'Plants' && styles.activeTabText]}>Plants</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'Articles' && styles.activeTabButton]} 
            onPress={() => setActiveTab('Articles')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeTab === 'Articles' && styles.activeTabText]}>Articles</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* List */}
      <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
        {activeTab === 'Plants' ? (
          mockPlants.map((item, index) => (
            <View key={item.id}>
              <TouchableOpacity activeOpacity={0.6} style={styles.listItem}>
                <Image source={{ uri: item.image }} style={styles.itemImage} contentFit="cover" />
                
                <View style={styles.itemContent}>
                  <View style={styles.itemTopRow}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Ionicons name="chevron-forward" size={18} color="#9E9E9E" />
                  </View>
                  <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                  <Text style={styles.itemCategory}>{item.category}</Text>
                </View>
              </TouchableOpacity>
              
              {/* Divider except for last item */}
              {index < mockPlants.length - 1 && <View style={styles.divider} />}
            </View>
          ))
        ) : (
          <View style={styles.articlesContainer}>
            {mockArticles.map((item) => (
              <Link key={item.id} href={`/article/${item.id}` as any} asChild>
                <TouchableOpacity activeOpacity={0.7} style={styles.articleCard}>
                  <Image source={{ uri: item.image }} style={styles.articleImage} contentFit="cover" />
                  <View style={styles.articleBottomRow}>
                    <Text style={styles.articleTitle} numberOfLines={2}>{item.title}</Text>
                    <TouchableOpacity activeOpacity={0.6} style={styles.ellipsisButton}>
                      <Ionicons name="ellipsis-vertical" size={24} color={TEXT_PRIMARY} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        )}
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
  iconButton: {
    padding: 8,
    marginHorizontal: -8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  tabContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  tabBackground: {
    flexDirection: 'row',
    backgroundColor: FIELD_BG,
    borderRadius: 8,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTabButton: {
    backgroundColor: BRAND_GREEN,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: TEXT_PRIMARY,
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  listContent: {
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 16,
  },
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#E0E0E0',
  },
  itemContent: {
    flex: 1,
    justifyContent: 'center',
    gap: 6,
  },
  itemTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  itemSubtitle: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    marginTop: 2,
  },
  itemCategory: {
    fontSize: 14,
    fontWeight: '600',
    color: BRAND_GREEN,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: DIVIDER_COLOR,
    width: '100%',
  },
  emptyContainer: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: TEXT_SECONDARY,
  },
  articlesContainer: {
    gap: 24,
  },
  articleCard: {
    gap: 16,
  },
  articleImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
  },
  articleBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  articleTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    color: TEXT_PRIMARY,
    lineHeight: 28,
  },
  ellipsisButton: {
    padding: 2,
    marginRight: -4,
  },
});
