import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#616161';
const FIELD_BG = '#FAFAFA';
const DIVIDER_COLOR = '#EEEEEE';

const plantData: Record<string, any> = {
  'foliage': {
    name: 'Prayer Plant',
    genus: 'Calathea',
    scientificName: 'Goeppertia orbifolia',
    category: 'Foliage Plants',
    image: 'https://images.unsplash.com/photo-1542838384-3c6607bbdcab?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542838384-3c6607bbdcab?w=400&q=80',
      'https://images.unsplash.com/photo-1620127252536-03bdfcf6d5c3?w=400&q=80',
      'https://images.unsplash.com/photo-1596707321035-c331908dce28?w=400&q=80',
    ],
    description: 'The Prayer Plant is known for its striking foliage. Its large, round leaves have intricate patterns of light and dark green resembling prayer hands, earning it the name.',
    distribution: require('../../assets/images/distribution_map.jpg'),
    conditions: [
      { id: 'temp', icon: 'thermometer-outline', label: 'Temperature', value: '18°C - 24°C' },
      { id: 'sun', icon: 'sunny-outline', label: 'Sunlight', value: 'Indirect light' },
      { id: 'hardy', icon: 'navigate-outline', label: 'Hardiness Zones', value: '10 - 12' },
      { id: 'soil', icon: 'color-filter-outline', label: 'Soil', value: 'Potting mix soil' },
      { id: 'growth', icon: 'trending-up-outline', label: 'Growth Rate', value: 'Moderate' },
      { id: 'tox', icon: 'warning-outline', label: 'Cautions/Toxicity', value: 'Non-toxic' },
    ],
    howToCare: [
      { id: 'water', icon: 'water-outline', label: 'Water', value: '2-3 times a week' },
      { id: 'fert', icon: 'apps-outline', label: 'Fertilizer', value: 'Every 2 weeks' },
      { id: 'prun', icon: 'cut-outline', label: 'Pruning', value: 'Early spring' },
      { id: 'prop', icon: 'sync-outline', label: 'Propagation', value: 'Division' },
      { id: 'rep', icon: 'flask-outline', label: 'Repotting', value: 'Spring, Fall' },
      { id: 'hum', icon: 'water-outline', label: 'Humidity', value: 'High' },
    ],
    pests: 'Susceptible to spider mites and aphids. Keep an eye for pests. Prone to root rot if overwatered.',
    specialFeatures: 'Unique leaf movement; leaves fold upward at night, resembling praying hands.',
    uses: 'Popular as an indoor ornamental plant, adding a touch of tropical beauty to homes and offices.',
    funFacts: 'The name "Prayer Plant" is inspired by its unique habit of folding its leaves upward in the evening, resembling hands in prayer.',
  }
};

const SectionHeader = ({ icon, title }: { icon: string, title: string }) => (
  <TouchableOpacity style={styles.sectionHeader} activeOpacity={0.7}>
    <View style={styles.sectionTitleRow}>
      <Ionicons name={icon as any} size={22} color={BRAND_GREEN} />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color={TEXT_SECONDARY} />
  </TouchableOpacity>
);

export default function PlantDetailScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const plant = plantData[id as string] || plantData['foliage'];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header Image */}
        <View style={styles.imageHeader}>
          <Image source={{ uri: plant.image }} style={styles.mainImage} contentFit="cover" />
          <View style={[styles.headerControls, { top: Platform.OS === 'ios' ? insets.top : 20 }]}>
            <TouchableOpacity onPress={() => router.back()} style={styles.navIconBtn}>
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <TouchableOpacity style={styles.navIconBtn}>
                <Ionicons name="share-outline" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsBookmarked(!isBookmarked)} style={styles.navIconBtn}>
                <Ionicons name={isBookmarked ? "bookmark" : "bookmark-outline"} size={24} color={isBookmarked ? BRAND_GREEN : "#FFFFFF"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.titleSection}>
            <Text style={styles.plantName}>{plant.name}</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Genus</Text>
              <Text style={styles.infoSeparator}>:</Text>
              <Text style={styles.infoValue}>{plant.genus}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Scientific Name</Text>
              <Text style={styles.infoSeparator}>:</Text>
              <Text style={[styles.infoValue, { fontStyle: 'italic' }]}>{plant.scientificName}</Text>
            </View>
          </View>

          {/* Gallery */}
          <View style={styles.section}>
            <SectionHeader icon="image-outline" title="Photo Gallery" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.galleryScroll}>
              {plant.gallery.map((img: string, index: number) => (
                <Image key={index} source={{ uri: img }} style={styles.galleryThumb} contentFit="cover" />
              ))}
            </ScrollView>
          </View>

          {/* Description */}
          <View style={styles.section}>
            <SectionHeader icon="document-text-outline" title="Description" />
            <Text style={styles.bodyText}>{plant.description}</Text>
          </View>

          {/* Distribution */}
          <View style={styles.section}>
            <SectionHeader icon="map-outline" title="Distribution" />
            <Image source={typeof plant.distribution === 'string' ? { uri: plant.distribution } : plant.distribution} style={styles.mapImage} contentFit="cover" />
            <View style={styles.legendContainer}>
              <LegendItem color={BRAND_GREEN} label="Native" />
              <LegendItem color="#FFB03B" label="Cultivated" />
              <LegendItem color="#9C27B0" label="Exotic" />
              <LegendItem color="#F44336" label="Invasive" />
              <LegendItem color="#2196F3" label="Potentially Invasive" />
              <LegendItem color="#607D8B" label="No Species Reported" />
            </View>
          </View>

          {/* Conditions Grid */}
          <View style={styles.section}>
            <SectionHeader icon="leaf-outline" title="Conditions" />
            <View style={styles.grid}>
              {plant.conditions.map((item: { id: string, icon: string, label: string, value: string }) => (
                <View key={item.id} style={styles.gridItem}>
                  <Ionicons name={item.icon as any} size={22} color={BRAND_GREEN} />
                  <View style={styles.gridText}>
                    <Text style={styles.itemLabel}>{item.label}</Text>
                    <Text style={styles.itemValue}>{item.value}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* How to Care Grid */}
          <View style={styles.section}>
            <SectionHeader icon="medkit-outline" title="How to Care" />
            <View style={styles.grid}>
              {plant.howToCare.map((item: any) => (
                <View key={item.id} style={styles.gridItem}>
                  <View style={styles.iconCircle}>
                    <Ionicons name={item.icon as any} size={20} color={BRAND_GREEN} />
                  </View>
                  <View style={styles.gridText}>
                    <Text style={styles.itemLabel}>{item.label}</Text>
                    <Text style={styles.itemValue}>{item.value}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Pests */}
          <View style={styles.section}>
            <SectionHeader icon="bug-outline" title="Common Pests & Diseases" />
            <Text style={styles.bodyText}>{plant.pests}</Text>
          </View>

          {/* Special Features */}
          <View style={styles.section}>
            <SectionHeader icon="star-outline" title="Special Features" />
            <Text style={styles.bodyText}>{plant.specialFeatures}</Text>
          </View>

          {/* Uses */}
          <View style={styles.section}>
            <SectionHeader icon="checkbox-outline" title="Uses" />
            <Text style={styles.bodyText}>{plant.uses}</Text>
          </View>

          {/* Fun Facts */}
          <View style={styles.section}>
            <SectionHeader icon="information-circle-outline" title="Fun Facts" />
            <Text style={styles.bodyText}>{plant.funFacts}</Text>
          </View>

          {/* Expert Banner */}
          <View style={styles.expertBanner}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1591115765373-520b72160dcb?w=400&q=80' }} style={styles.expertIllustration} contentFit="contain" />
            <View style={styles.expertInfo}>
              <Text style={styles.expertTitleText}>Ask Plant Expert</Text>
              <Text style={styles.expertSubtitleText}>Our botanists are ready to help with your problems.</Text>
              <Link href="/ask-experts" asChild>
                <TouchableOpacity style={styles.expertGreenBtn}>
                  <Text style={styles.expertGreenBtnText}>Ask the Experts</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>

          {/* Feedback */}
          <View style={styles.feedbackContainer}>
            <Text style={styles.feedbackTitleText}>Was this helpful?</Text>
            <View style={styles.feedbackRow}>
              <TouchableOpacity style={styles.roundedBtn}><Text style={styles.roundedBtnText}>Yes</Text></TouchableOpacity>
              <TouchableOpacity style={styles.roundedBtn}><Text style={styles.roundedBtnText}>No</Text></TouchableOpacity>
            </View>
          </View>

          <View style={{ height: 120 }} />
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={[styles.bottomBar, { paddingBottom: Math.max(insets.bottom, 24) }]}>
        <TouchableOpacity style={styles.primaryPillBtn}>
          <Ionicons name="add" size={20} color="#FFFFFF" />
          <Text style={styles.primaryPillText}>Add to My Plants</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const LegendItem = ({ color, label }: { color: string, label: string }) => (
  <View style={styles.legendItem}>
    <View style={[styles.legendColor, { backgroundColor: color }]} />
    <Text style={styles.legendLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: SCREEN_BG },
  scrollContent: { backgroundColor: SCREEN_BG },
  imageHeader: { width: width, height: 380 },
  mainImage: { width: '100%', height: '100%' },
  headerControls: { position: 'absolute', left: 24, right: 24, flexDirection: 'row', justifyContent: 'space-between' },
  navIconBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.3)', alignItems: 'center', justifyContent: 'center' },
  content: { paddingHorizontal: 24, paddingVertical: 24, gap: 32 },
  titleSection: { gap: 8 },
  plantName: { fontSize: 26, fontWeight: '700', color: TEXT_PRIMARY },
  infoRow: { flexDirection: 'row', gap: 8 },
  infoLabel: { fontSize: 14, fontWeight: '500', color: TEXT_SECONDARY, width: 110 },
  infoSeparator: { fontSize: 14, color: TEXT_SECONDARY },
  infoValue: { fontSize: 14, fontWeight: '600', color: TEXT_PRIMARY, flex: 1 },
  section: { gap: 16 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sectionTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: TEXT_PRIMARY },
  bodyText: { fontSize: 15, lineHeight: 22, color: TEXT_PRIMARY, fontWeight: '400' },
  galleryScroll: { gap: 12 },
  galleryThumb: { width: 120, height: 90, borderRadius: 12 },
  mapImage: { width: '100%', height: 200, borderRadius: 12 },
  legendContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 8 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendColor: { width: 14, height: 14, borderRadius: 3 },
  legendLabel: { fontSize: 12, color: TEXT_SECONDARY },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  gridItem: { width: '48%', backgroundColor: FIELD_BG, borderRadius: 16, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 10 },
  gridText: { flex: 1 },
  iconCircle: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#E8F5E9', alignItems: 'center', justifyContent: 'center' },
  itemLabel: { fontSize: 12, color: TEXT_SECONDARY, fontWeight: '500' },
  itemValue: { fontSize: 13, color: TEXT_PRIMARY, fontWeight: '700' },
  expertBanner: { flexDirection: 'row', backgroundColor: FIELD_BG, borderRadius: 20, padding: 16, alignItems: 'center', gap: 16 },
  expertIllustration: { width: 100, height: 100 },
  expertInfo: { flex: 1, gap: 6 },
  expertTitleText: { fontSize: 16, fontWeight: '700', color: TEXT_PRIMARY },
  expertSubtitleText: { fontSize: 12, color: TEXT_SECONDARY, lineHeight: 18 },
  expertGreenBtn: { backgroundColor: BRAND_GREEN, paddingVertical: 8, paddingHorizontal: 12, borderRadius: 100, alignSelf: 'flex-start' },
  expertGreenBtnText: { color: '#FFF', fontSize: 12, fontWeight: '700' },
  feedbackContainer: { alignItems: 'flex-start', gap: 16 },
  feedbackTitleText: { fontSize: 16, fontWeight: '700', color: TEXT_PRIMARY },
  feedbackRow: { flexDirection: 'row', gap: 12 },
  roundedBtn: { borderWidth: 1, borderColor: '#EEEEEE', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 40 },
  roundedBtnText: { fontSize: 14, fontWeight: '600', color: TEXT_PRIMARY },
  bottomBar: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#FFFFFF', paddingHorizontal: 24, paddingTop: 16, borderTopWidth: 1, borderTopColor: '#F5F5F5' },
  primaryPillBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: BRAND_GREEN, height: 50, borderRadius: 25, gap: 10 },
  primaryPillText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});
