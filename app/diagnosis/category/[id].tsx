import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CATEGORY_DISEASES, DISEASE_CATEGORIES } from '../../../data/diseases';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#757575';
const SEARCH_BG = '#FAFAFA';
const DIVIDER_COLOR = '#EEEEEE';

export default function CategoryDiseasesScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const category = DISEASE_CATEGORIES.find((c) => c.id === id);
  const title = category?.title || 'Diseases';
  const diseasesList = CATEGORY_DISEASES[id || ''] || [];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={[styles.header, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <TouchableOpacity style={styles.headerLeft} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{title}</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#BDBDBD" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search diseases..."
            placeholderTextColor="#BDBDBD"
          />
        </View>

        {/* Diseases List */}
        <View style={styles.listContainer}>
          {diseasesList.length > 0 ? (
            diseasesList.map((item, index) => (
              <View key={item.id}>
                <TouchableOpacity
                  style={styles.diseaseCard}
                  activeOpacity={0.7}
                  onPress={() => router.push(`/diagnosis/${item.id}` as any)}
                >
                  <Image source={{ uri: item.image }} style={styles.diseaseImage} contentFit="cover" />
                  <View style={styles.diseaseContent}>
                    <Text style={styles.diseaseName}>{item.name}</Text>
                    <Text style={styles.diseaseDescription} numberOfLines={5}>
                      {item.description}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="#E0E0E0" />
                </TouchableOpacity>

                {/* Divider (except last item) */}
                {index < diseasesList.length - 1 && <View style={styles.divider} />}
              </View>
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No diseases found for this category.</Text>
            </View>
          )}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: SCREEN_BG,
  },
  headerLeft: {
    width: 40,
    alignItems: 'flex-start',
  },
  headerTitle: {
    flex: 1,
    fontSize: 22,
    fontWeight: '700',
    color: TEXT_PRIMARY,
    textAlign: 'center',
  },
  headerRight: {
    width: 40,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: SEARCH_BG,
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Urbanist_400Regular',
    color: TEXT_PRIMARY,
  },
  listContainer: {
    paddingHorizontal: 24,
  },
  diseaseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: SCREEN_BG,
    gap: 16,
    paddingVertical: 16,
  },
  diseaseImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: SEARCH_BG,
  },
  diseaseContent: {
    flex: 1,
    gap: 8,
  },
  diseaseName: {
    fontSize: 18,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  diseaseDescription: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: DIVIDER_COLOR,
    width: '100%',
  },
  emptyContainer: {
    padding: 24,
    alignItems: 'center',
  },
  emptyText: {
    color: TEXT_SECONDARY,
    fontSize: 16,
  },
});
