import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import { Image } from 'expo-image';
import { useState } from 'react';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const FIELD_BG = '#FAFAFA';

const categories = [
  { id: 'succulents', title: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80' },
  { id: 'flowering', title: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1490750967868-88cb44cb2754?w=400&q=80' },
  { id: 'foliage', title: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1542838384-3c6607bbdcab?w=400&q=80' },
  { id: 'trees', title: 'Trees', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&q=80' },
  { id: 'weeds', title: 'Weeds & Shrubs', image: 'https://images.unsplash.com/photo-1596700078737-0130f40d6945?w=400&q=80' },
  { id: 'fruits', title: 'Fruits', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80' },
  { id: 'vegetables', title: 'Vegetables', image: 'https://images.unsplash.com/photo-1566385101042-1a0da0c125c9?w=400&q=80' },
  { id: 'herbs', title: 'Herbs', image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&q=80' },
  { id: 'mushrooms', title: 'Mushrooms', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80' },
  { id: 'toxic', title: 'Toxic Plants', image: 'https://images.unsplash.com/photo-1512428559083-a401a304443a?w=400&q=80' },
];

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [search, setSearch] = useState('');

  const filteredCategories = categories.filter(c => 
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Navbar */}
      <View style={[styles.navbar, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.navButton}>
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Explore Plants</Text>
        <View style={styles.navButton} />
      </View>

      <View style={styles.content}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={20} color="#BDBDBD" />
            <TextInput 
              placeholder="Search plants..." 
              placeholderTextColor="#BDBDBD"
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
            />
          </View>
        </View>

        {/* Categories Grid */}
        <ScrollView contentContainerStyle={styles.gridContainer} showsVerticalScrollIndicator={false}>
          {filteredCategories.map((item) => (
            <Link key={item.id} href={`/explore/${item.id}?title=${encodeURIComponent(item.title)}` as any} asChild>
              <TouchableOpacity style={styles.gridItem} activeOpacity={0.7}>
                <Text style={styles.gridTitle} numberOfLines={2}>{item.title}</Text>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item.image }} style={styles.image} contentFit="cover" />
                </View>
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCREEN_BG,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: SCREEN_BG,
  },
  navTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  navButton: {
    padding: 4,
    width: 32,
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginBottom: 16,
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
  gridContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
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
    width: '80%',
    height: 100,
    bottom: -10,
  },
});
