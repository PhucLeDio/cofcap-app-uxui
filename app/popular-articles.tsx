import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import { Image } from 'expo-image';
import { useState } from 'react';

const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const FIELD_BG = '#FAFAFA';

const mockArticles = [
  { id: '1', title: 'Unlock the Secrets of Succulents: Care Tips for Thriving Beauties', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80' },
  { id: '2', title: 'The Ultimate Guide to Indoor Plants: From A to Z', image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800&q=80' },
  { id: '3', title: 'Creating a Tranquil Oasis: How to Design Your Zen Garden', image: 'https://images.unsplash.com/photo-1598902506466-9ab62e1c9448?w=800&q=80' },
  { id: '4', title: 'Top 10 Air-Purifying Plants for a Healthier Home', image: 'https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?w=800&q=80' },
  { id: '5', title: 'The Art of Bonsai: A Complete Beginner Guide', image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=800&q=80' },
  { id: '6', title: 'Herbs You Can Grow Indoors Year-Round', image: 'https://images.unsplash.com/photo-1562525455-0fefa98e2b17?w=800&q=80' },
];

export default function PopularArticlesScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={[styles.container, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton} activeOpacity={0.6}>
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Popular Articles</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color="#BDBDBD" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search articles..."
            placeholderTextColor="#BDBDBD"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Article List */}
      <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
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
    fontSize: 24,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  headerPlaceholder: {
    width: 40,
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: FIELD_BG,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: TEXT_PRIMARY,
  },
  listContent: {
    paddingBottom: 40,
    paddingHorizontal: 24,
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
