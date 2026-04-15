import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams, Link } from 'expo-router';
import { Image } from 'expo-image';
import { useState } from 'react';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#616161';
const FIELD_BG = '#FAFAFA';
const DIVIDER_COLOR = '#EEEEEE';

type PlantItem = { id: string; name: string; scientific: string; category: string; image: string };

const categoryPlants: Record<string, PlantItem[]> = {
  foliage: [
    { id: '1', name: 'Prayer Plant', scientific: 'Goeppertia orbifolia', category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1542838384-3c6607bbdcab?w=400&q=80' },
    { id: '2', name: 'Baby Rubber Plant', scientific: 'Peperomia obtusifolia', category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1596707321035-c331908dce28?w=400&q=80' },
    { id: '3', name: 'Snake Plant', scientific: 'Sansevieria trifasciata', category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1572621426421-ad9039dc359f?w=400&q=80' },
    { id: '4', name: 'Swiss Cheese Plant', scientific: 'Monstera deliciosa', category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
    { id: '5', name: 'Dumbcane', scientific: 'Dieffenbachia seguine', category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1599933333331-ae1059f13115?w=400&q=80' },
    { id: '6', name: 'Fiddle Leaf Fig', scientific: 'Ficus lyrata', category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1597055931211-1339d2c5bcc1?w=400&q=80' },
  ],
  succulents: [
    { id: '1', name: 'Aloe Vera', scientific: 'Aloe vera', category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1596547609652-9fc5b80a6baf?w=400&q=80' },
    { id: '2', name: 'Echeveria', scientific: 'Echeveria elegans', category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80' },
    { id: '3', name: 'Jade Plant', scientific: 'Crassula ovata', category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1520302630591-fd1736b2b05b?w=400&q=80' },
    { id: '4', name: 'Desert Agave', scientific: 'Agave deserti', category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1510860555711-2e2e8acac19b?w=400&q=80' },
    { id: '5', name: 'Prickly Pear Cactus', scientific: 'Opuntia ficus-indica', category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80' },
  ],
  flowering: [
    { id: '1', name: 'Orchid', scientific: 'Phalaenopsis amabilis', category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1490750967868-88cb44cb2754?w=400&q=80' },
    { id: '2', name: 'Peace Lily', scientific: 'Spathiphyllum wallisii', category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1567225591450-06036b3392a6?w=400&q=80' },
    { id: '3', name: 'Bird of Paradise', scientific: 'Strelitzia reginae', category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1612363148656-2e8ad8eb5e83?w=400&q=80' },
    { id: '4', name: 'Anthurium', scientific: 'Anthurium andraeanum', category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&q=80' },
    { id: '5', name: 'Lavender', scientific: 'Lavandula angustifolia', category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&q=80' },
  ],
  trees: [
    { id: '1', name: 'Cherry Blossom', scientific: 'Prunus serrulata', category: 'Trees', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&q=80' },
    { id: '2', name: 'Oak Tree', scientific: 'Quercus robur', category: 'Trees', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&q=80' },
    { id: '3', name: 'Banyan Tree', scientific: 'Ficus benghalensis', category: 'Trees', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80' },
    { id: '4', name: 'Palm Tree', scientific: 'Arecaceae', category: 'Trees', image: 'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?w=400&q=80' },
    { id: '5', name: 'Bamboo', scientific: 'Bambusoideae', category: 'Trees', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80' },
  ],
  herbs: [
    { id: '1', name: 'Basil', scientific: 'Ocimum basilicum', category: 'Herbs', image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&q=80' },
    { id: '2', name: 'Rosemary', scientific: 'Salvia rosmarinus', category: 'Herbs', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=400&q=80' },
    { id: '3', name: 'Mint', scientific: 'Mentha', category: 'Herbs', image: 'https://images.unsplash.com/photo-1628556270448-4d1f5a4f3cce?w=400&q=80' },
    { id: '4', name: 'Thyme', scientific: 'Thymus vulgaris', category: 'Herbs', image: 'https://images.unsplash.com/photo-1562525455-0fefa98e2b17?w=400&q=80' },
    { id: '5', name: 'Lemongrass', scientific: 'Cymbopogon citratus', category: 'Herbs', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80' },
  ],
  vegetables: [
    { id: '1', name: 'Tomato', scientific: 'Solanum lycopersicum', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&q=80' },
    { id: '2', name: 'Lettuce', scientific: 'Lactuca sativa', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1566385101042-1a0da0c125c9?w=400&q=80' },
    { id: '3', name: 'Carrot', scientific: 'Daucus carota', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80' },
    { id: '4', name: 'Bell Pepper', scientific: 'Capsicum annuum', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80' },
    { id: '5', name: 'Cucumber', scientific: 'Cucumis sativus', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1568584711271-6c929fb49b60?w=400&q=80' },
  ],
  fruits: [
    { id: '1', name: 'Mango Tree', scientific: 'Mangifera indica', category: 'Fruits', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80' },
    { id: '2', name: 'Lemon Tree', scientific: 'Citrus limon', category: 'Fruits', image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&q=80' },
    { id: '3', name: 'Strawberry', scientific: 'Fragaria ananassa', category: 'Fruits', image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=400&q=80' },
    { id: '4', name: 'Avocado Tree', scientific: 'Persea americana', category: 'Fruits', image: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?w=400&q=80' },
    { id: '5', name: 'Banana Plant', scientific: 'Musa acuminata', category: 'Fruits', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80' },
  ],
  mushrooms: [
    { id: '1', name: 'Shiitake', scientific: 'Lentinula edodes', category: 'Mushrooms', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80' },
    { id: '2', name: 'Oyster Mushroom', scientific: 'Pleurotus ostreatus', category: 'Mushrooms', image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400&q=80' },
    { id: '3', name: 'Button Mushroom', scientific: 'Agaricus bisporus', category: 'Mushrooms', image: 'https://images.unsplash.com/photo-1607189260793-83a9fddf7dab?w=400&q=80' },
    { id: '4', name: 'Chanterelle', scientific: 'Cantharellus cibarius', category: 'Mushrooms', image: 'https://images.unsplash.com/photo-1565093481-8e64b1e05af3?w=400&q=80' },
  ],
  weeds: [
    { id: '1', name: 'Dandelion', scientific: 'Taraxacum officinale', category: 'Weeds & Shrubs', image: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=400&q=80' },
    { id: '2', name: 'Lantana', scientific: 'Lantana camara', category: 'Weeds & Shrubs', image: 'https://images.unsplash.com/photo-1567748157439-651aca2ff064?w=400&q=80' },
    { id: '3', name: 'Wild Clover', scientific: 'Trifolium repens', category: 'Weeds & Shrubs', image: 'https://images.unsplash.com/photo-1596700078737-0130f40d6945?w=400&q=80' },
    { id: '4', name: 'Thistle', scientific: 'Cirsium vulgare', category: 'Weeds & Shrubs', image: 'https://images.unsplash.com/photo-1601987879604-1e9e70a3b1fb?w=400&q=80' },
  ],
  toxic: [
    { id: '1', name: 'Oleander', scientific: 'Nerium oleander', category: 'Toxic Plants', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
    { id: '2', name: 'Nightshade', scientific: 'Solanum nigrum', category: 'Toxic Plants', image: 'https://images.unsplash.com/photo-1512428559083-a401a304443a?w=400&q=80' },
    { id: '3', name: 'Foxglove', scientific: 'Digitalis purpurea', category: 'Toxic Plants', image: 'https://images.unsplash.com/photo-1561181286-d3b7cd31f41d?w=400&q=80' },
    { id: '4', name: 'Belladonna', scientific: 'Atropa belladonna', category: 'Toxic Plants', image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&q=80' },
  ],
}; // end categoryPlants

const foliagePlants: PlantItem[] = categoryPlants['foliage'];

export default function CategoryDetailScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { category, title } = useLocalSearchParams();
  const [search, setSearch] = useState('');

  // Use per-category data, fallback to foliage plants
  const initialPlants: PlantItem[] = categoryPlants[category as string] || foliagePlants.map((p: PlantItem) => ({
    ...p,
    category: title as string || 'Plant Category'
  }));

  const filteredPlants: PlantItem[] = initialPlants.filter((p: PlantItem) => 
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.scientific.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Navbar */}
      <View style={[styles.navbar, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.navButton}>
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>{title || 'Plants List'}</Text>
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

        {/* Plants List */}
        <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
          {filteredPlants.map((plant, index) => (
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
              {index < filteredPlants.length - 1 && <View style={styles.divider} />}
            </View>
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
    marginBottom: 8,
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
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  plantCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 16,
  },
  plantImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#EEEEEE',
  },
  textContainer: {
    flex: 1,
    gap: 6,
  },
  plantName: {
    fontSize: 18,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  scientificName: {
    fontSize: 14,
    fontWeight: '500',
    color: TEXT_SECONDARY,
    fontStyle: 'italic',
  },
  categoryTag: {
    fontSize: 14,
    fontWeight: '600',
    color: BRAND_GREEN,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: DIVIDER_COLOR,
    width: '100%',
  },
});
