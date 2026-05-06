import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import { Image } from 'expo-image';
import { useState } from 'react';

import { ALL_PLANTS, PlantItem } from '../data/plants';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#616161';
const FIELD_BG = '#FAFAFA';
const DIVIDER_COLOR = '#EEEEEE';

const recentSearchesInit = [
  'Night-blooming cereus',
  'Chinese anemone',
  'Silver wormwood',
];

const categories = [
  { id: 'succulents', title: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80' },
  { id: 'flowering', title: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1490750967868-88cb44cb2754?w=400&q=80' },
  { id: 'foliage', title: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1542838384-3c6607bbdcab?w=400&q=80' },
  { id: 'trees', title: 'Trees', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&q=80' },
  { id: 'weeds', title: 'Weeds & Shrubs', image: 'https://images.unsplash.com/photo-1596700078737-0130f40d6945?w=400&q=80' },
  { id: 'fruits', title: 'Fruits', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80' },
  { id: 'vegetables', title: 'Vegetables', image: 'https://images.unsplash.com/photo-1566385101042-1a0da0c125c9?w=400&q=80' },
  { id: 'herbs', title: 'Herbs', image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&q=80' },
];

export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [recentSearches, setRecentSearches] = useState(recentSearchesInit);

  const removeRecent = (text: string) => {
    setRecentSearches(recentSearches.filter(item => item !== text));
  };

  const clearAll = () => {
    setRecentSearches([]);
  };

  const filteredResults = search.trim() 
    ? ALL_PLANTS.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.scientific.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Search Header */}
      <View style={[styles.header, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <View style={styles.searchBarContainer}>
          <Ionicons name="search-outline" size={20} color="#BDBDBD" />
          <TextInput 
            placeholder="Search" 
            placeholderTextColor="#BDBDBD"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            autoFocus
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Ionicons name="close-circle" size={20} color={TEXT_PRIMARY} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {!search ? (
          <>
            {/* Recent Searches Header */}
            {recentSearches.length > 0 && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Recent Searches</Text>
                  <TouchableOpacity onPress={clearAll}>
                    <Ionicons name="close" size={24} color={TEXT_PRIMARY} />
                  </TouchableOpacity>
                </View>

                <View style={styles.recentList}>
                  {recentSearches.map((item, index) => (
                    <View key={index} style={styles.recentItem}>
                      <TouchableOpacity 
                        style={styles.recentTextContainer}
                        onPress={() => setSearch(item)}
                      >
                        <Text style={styles.recentText}>{item}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => removeRecent(item)}>
                        <Ionicons name="close" size={20} color="#BDBDBD" />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Categories Grid */}
            <View style={[styles.section, { marginTop: 24 }]}>
              <View style={styles.gridContainer}>
                {categories.map((item) => (
                  <Link key={item.id} href={`/explore/${item.id}?title=${encodeURIComponent(item.title)}` as any} asChild>
                    <TouchableOpacity style={styles.gridItem} activeOpacity={0.7}>
                      <Text style={styles.gridTitle} numberOfLines={2}>{item.title}</Text>
                      <View style={styles.imageContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} contentFit="cover" />
                      </View>
                    </TouchableOpacity>
                  </Link>
                ))}
              </View>
            </View>
          </>
        ) : filteredResults.length > 0 ? (
          /* Search Results List */
          <View style={styles.resultsContainer}>
            {filteredResults.map((plant, index) => (
              <View key={plant.id}>
                <Link href={`/plant/${plant.id}` as any} asChild>
                  <TouchableOpacity style={styles.plantCard} activeOpacity={0.7}>
                    <Image source={{ uri: plant.image }} style={styles.plantImage} contentFit="cover" />
                    <View style={styles.textContainer}>
                      <Text style={styles.plantName}>{plant.name}</Text>
                      <Text style={styles.scientificName}>{plant.scientific}</Text>
                      <Text style={styles.categoryTag}>{plant.category}</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color="#BDBDBD" />
                  </TouchableOpacity>
                </Link>
                {index < filteredResults.length - 1 && <View style={styles.divider} />}
              </View>
            ))}
          </View>
        ) : (
          /* No Results Found State */
          <View style={styles.emptyStateContainer}>
            <View style={styles.illustrationContainer}>
              <View style={styles.clipboardBackground}>
                <View style={styles.clipboardClip} />
              </View>
              <View style={styles.clipboardForeground}>
                <View style={styles.clipboardClipGreen} />
              </View>
            </View>
            <Text style={styles.emptyTitle}>No Plants Found</Text>
            <Text style={styles.emptySubtitle}>Check your keywords or try searching with another keywords.</Text>
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
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: SCREEN_BG,
    gap: 12,
  },
  backButton: {
    padding: 4,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: FIELD_BG,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: TEXT_PRIMARY,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  section: {
    paddingHorizontal: 24,
    marginTop: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  recentList: {
    gap: 16,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  recentTextContainer: {
    flex: 1,
  },
  recentText: {
    fontSize: 18,
    color: '#757575',
    fontWeight: '500',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '47.5%',
    backgroundColor: FIELD_BG,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
    height: 140,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: TEXT_PRIMARY,
  },
  imageContainer: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 100,
    bottom: -10,
  },
  resultsContainer: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  plantCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 16,
  },
  plantImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: FIELD_BG,
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
  plantName: {
    fontSize: 18,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  scientificName: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    fontStyle: 'italic',
  },
  categoryTag: {
    fontSize: 14,
    fontWeight: '600',
    color: BRAND_GREEN,
  },
  divider: {
    height: 1,
    backgroundColor: DIVIDER_COLOR,
  },
  emptyStateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 48,
    paddingTop: 100,
  },
  illustrationContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  clipboardBackground: {
    width: 120,
    height: 160,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#EEEEEE',
    position: 'absolute',
    transform: [{ rotate: '-10deg' }, { translateX: -20 }],
  },
  clipboardForeground: {
    width: 120,
    height: 160,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#EEEEEE',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  clipboardClip: {
    width: 60,
    height: 16,
    backgroundColor: '#BDBDBD',
    borderRadius: 4,
    position: 'absolute',
    top: -8,
    alignSelf: 'center',
  },
  clipboardClipGreen: {
    width: 60,
    height: 16,
    backgroundColor: BRAND_GREEN,
    borderRadius: 4,
    position: 'absolute',
    top: -8,
    alignSelf: 'center',
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: TEXT_PRIMARY,
    marginBottom: 12,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    color: TEXT_SECONDARY,
    textAlign: 'center',
    lineHeight: 24,
  },
});
