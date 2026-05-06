import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import { Image } from 'expo-image';
import { useState } from 'react';
import { COMMON_DISEASES } from '../../data/diseases';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#757575';
const DIVIDER_COLOR = '#F5F5F5';
const FIELD_BG = '#F7F8F9';

export default function CommonDiseasesScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDiseases = COMMON_DISEASES.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={[styles.header, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <TouchableOpacity onPress={() => router.navigate('/(tabs)/diagnose')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Common Diseases</Text>
        <View style={styles.backButton} />
      </View>

      {/* Search Bar Area */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color="#BDBDBD" />
          <TextInput
            style={styles.input}
            placeholder="Search diseases..."
            placeholderTextColor="#BDBDBD"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.listContainer}>
          {filteredDiseases.map((item, index) => (
            <Link key={item.id} href={`/diagnosis/${item.id}` as any} asChild>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.diseaseCard}>
                  <Image source={{ uri: item.image }} style={styles.diseaseImage} contentFit="cover" />
                  <View style={styles.diseaseInfo}>
                    <Text style={styles.diseaseName}>{item.name}</Text>
                    <Text style={styles.diseaseDesc} numberOfLines={3}>{item.description}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
                </View>
                {index < filteredDiseases.length - 1 && <View style={styles.divider} />}
              </TouchableOpacity>
            </Link>
          ))}

          {filteredDiseases.length === 0 && (
            <View style={styles.emptyResults}>
              <Ionicons name="search-outline" size={60} color="#EEEEEE" />
              <Text style={styles.emptyText}>{`No diseases found for "${searchQuery}"`}</Text>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: SCREEN_BG,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: SCREEN_BG,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: FIELD_BG,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: TEXT_PRIMARY,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  listContainer: {
    paddingHorizontal: 20,
    marginTop: 12,
  },
  diseaseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 16,
  },
  diseaseImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
  },
  diseaseInfo: {
    flex: 1,
    gap: 6,
  },
  diseaseName: {
    fontSize: 18,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  diseaseDesc: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: DIVIDER_COLOR,
  },
  emptyResults: {
    alignItems: 'center',
    marginTop: 100,
    gap: 16,
  },
  emptyText: {
    fontSize: 16,
    color: TEXT_SECONDARY,
    textAlign: 'center',
  },
});
