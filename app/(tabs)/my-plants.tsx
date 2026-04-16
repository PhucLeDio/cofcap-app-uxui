import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import { Image } from 'expo-image';
import { useState } from 'react';
import { MY_PLANTS } from '../../data/my-plants';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#757575';
const DIVIDER_COLOR = '#F5F5F5';
const SEGMENT_BG = '#F5F5F5';

export default function MyPlantsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [activeSegment, setActiveSegment] = useState('Plants');

  const renderNeedIcon = (need: string, index: number) => {
    let bgColor = '';
    let iconName: keyof typeof Ionicons.glyphMap = 'leaf';

    switch (need) {
      case 'water':
        bgColor = '#2D9CDB'; // Blue
        iconName = 'water';
        break;
      case 'nutrition':
        bgColor = '#EB5757'; // Red/Magenta
        iconName = 'nutrition'; 
        break;
      case 'mist':
        bgColor = '#9B51E0'; // Purple
        iconName = 'color-wand';
        break;
      case 'sun':
        bgColor = '#F2994A'; // Orange/Yellow
        iconName = 'sunny';
        break;
      default:
        bgColor = BRAND_GREEN;
        iconName = 'leaf';
    }

    return (
      <View key={`${need}-${index}`} style={[styles.needCircle, { backgroundColor: bgColor }]}>
        <Ionicons name={iconName} size={12} color="#FFFFFF" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={[styles.header, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <View style={styles.headerIcon}>
          <Ionicons name="leaf" size={28} color={BRAND_GREEN} />
        </View>
        <Text style={styles.headerTitle}>My Plants</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search-outline" size={24} color={TEXT_PRIMARY} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="ellipsis-vertical" size={24} color={TEXT_PRIMARY} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Segmented Control */}
      <View style={styles.segmentContainer}>
        <View style={styles.segmentBg}>
          <TouchableOpacity 
            style={[styles.segmentBtn, activeSegment === 'Plants' && styles.segmentActive]}
            onPress={() => setActiveSegment('Plants')}
            activeOpacity={0.8}
          >
            <Text style={[styles.segmentText, activeSegment === 'Plants' && styles.segmentTextActive]}>Plants (12)</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.segmentBtn, activeSegment === 'Snap History' && styles.segmentActive]}
            onPress={() => setActiveSegment('Snap History')}
            activeOpacity={0.8}
          >
            <Text style={[styles.segmentText, activeSegment === 'Snap History' && styles.segmentTextActive]}>Snap History (48)</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.listContainer}>
          {MY_PLANTS.map((plant, index) => (
            <Link key={plant.id} href={`/my-plants/${plant.id}` as any} asChild>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.plantCard}>
                  <Image source={{ uri: plant.image }} style={styles.plantImage} contentFit="cover" />
                  <View style={styles.plantInfo}>
                    <Text style={styles.plantName}>{plant.name}</Text>
                    <Text style={styles.plantScientific}>{plant.scientificName}</Text>
                    <View style={styles.needsRow}>
                      {plant.needs.map((need, i) => renderNeedIcon(need, i))}
                    </View>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
                </View>
                {index < MY_PLANTS.length - 1 && <View style={styles.divider} />}
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <Ionicons name="add" size={32} color="#FFFFFF" />
      </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: SCREEN_BG,
  },
  headerIcon: {
    width: 44,
    height: 44,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 44,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  segmentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: SCREEN_BG,
  },
  segmentBg: {
    flexDirection: 'row',
    backgroundColor: SEGMENT_BG,
    borderRadius: 8,
    padding: 4,
  },
  segmentBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  segmentActive: {
    backgroundColor: BRAND_GREEN,
  },
  segmentText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#757575',
  },
  segmentTextActive: {
    color: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 100, // accommodate FAB
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  plantCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 16,
  },
  plantImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
  },
  plantInfo: {
    flex: 1,
    gap: 6,
  },
  plantName: {
    fontSize: 18,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  plantScientific: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    fontStyle: 'italic',
  },
  needsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  needCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: DIVIDER_COLOR,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: BRAND_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: BRAND_GREEN,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 100,
  },
});
