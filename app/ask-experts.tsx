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
const TEXT_SECONDARY = '#616161';
const FIELD_BG = '#FAFAFA';
const DIVIDER_COLOR = '#EEEEEE';

const mockExperts = [
  { id: '1', name: 'Dr. Ly Quynh Tran', specialty: 'Orchidaceae Researcher', image: 'https://i.pravatar.cc/150?u=1' },
  { id: '2', name: 'Prof. Benjamin Woods', specialty: 'Ethnobotany Expert', image: 'https://i.pravatar.cc/150?u=2' },
  { id: '3', name: 'Dr. Amelia Rodriguez', specialty: 'Tropical Rainforest Ecologist', image: 'https://i.pravatar.cc/150?u=3' },
  { id: '4', name: 'Prof. James Harper', specialty: 'Desert Flora Specialist', image: 'https://i.pravatar.cc/150?u=4' },
  { id: '5', name: 'Dr. Emily Baker', specialty: 'Alpine Plant Biologist', image: 'https://i.pravatar.cc/150?u=5' },
  { id: '6', name: 'Prof. Samuel Chen', specialty: 'Medicinal Plant Researcher', image: 'https://i.pravatar.cc/150?u=6' },
  { id: '7', name: 'Dr. Grace Turner', specialty: 'Moss and Lichen Taxonomy', image: 'https://i.pravatar.cc/150?u=7' },
  { id: '8', name: 'Prof. Xavier Garcia', specialty: 'Carnivorous Plants Specialist', image: 'https://i.pravatar.cc/150?u=8' },
];

export default function AskExpertsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Navbar */}
      <View style={[styles.navbar, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.navButton}>
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Ask Plant Expert</Text>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="time-outline" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={20} color="#BDBDBD" />
            <TextInput 
              placeholder="Search plant expert..." 
              placeholderTextColor="#BDBDBD"
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
            />
          </View>
        </View>

        {/* Expert List */}
        <ScrollView 
          contentContainerStyle={styles.listContent} 
          showsVerticalScrollIndicator={false}
        >
          {mockExperts.map((expert, index) => (
            <View key={expert.id}>
              <Link href={`/chat/${expert.id}` as any} asChild>
                <TouchableOpacity style={styles.expertCard} activeOpacity={0.7}>
                  <View style={styles.expertInfo}>
                    <Image source={{ uri: expert.image }} style={styles.avatar} />
                    <View style={styles.textContainer}>
                      <Text style={styles.expertName}>{expert.name}</Text>
                      <Text style={styles.expertSpecialty}>{expert.specialty}</Text>
                    </View>
                  </View>
                  <View style={styles.chatButton}>
                    <Ionicons name="chatbubble-ellipses-outline" size={24} color={BRAND_GREEN} />
                  </View>
                </TouchableOpacity>
              </Link>
              {index < mockExperts.length - 1 && <View style={styles.divider} />}
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
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
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
  expertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  expertInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EEEEEE',
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
  expertName: {
    fontSize: 18,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  expertSpecialty: {
    fontSize: 14,
    fontWeight: '500',
    color: TEXT_SECONDARY,
  },
  chatButton: {
    padding: 8,
  },
  divider: {
    height: 1,
    backgroundColor: DIVIDER_COLOR,
    width: '100%',
  },
});
