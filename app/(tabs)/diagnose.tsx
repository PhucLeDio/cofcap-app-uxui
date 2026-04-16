import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COMMON_DISEASES, DISEASE_CATEGORIES } from '../../data/diseases';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#757575';
const CARD_BG = '#F5F9F7'; // Soft greenish background for hero
const FIELD_BG = '#FAFAFA';

export default function DiagnoseScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={[styles.header, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <View style={styles.headerLeft}>
          <Ionicons name="leaf" size={24} color={BRAND_GREEN} />
        </View>
        <Text style={styles.headerTitle}>Diagnose</Text>
        <TouchableOpacity style={styles.headerRight} activeOpacity={0.7}>
          <Ionicons name="time-outline" size={28} color={TEXT_PRIMARY} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Hero Card */}
        <View style={styles.heroCard}>
          <View style={styles.heroImageContainer}>
            <Image
              source="https://images.unsplash.com/photo-1597055931211-1339d2c5bcc1?w=400&q=80"
              style={styles.heroImage}
              contentFit="contain"
            />
          </View>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Check Your Plant</Text>
            <Text style={styles.heroSubtitle}>Take photos, start diagnose diseases, & get plant care tips.</Text>
            <TouchableOpacity
              style={styles.diagnoseBtn}
              activeOpacity={0.8}
              onPress={() => router.push('/camera' as any)}
            >
              <Text style={styles.diagnoseBtnText}>Diagnose</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Common Diseases */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Common Diseases</Text>
            <TouchableOpacity
              style={styles.viewAllBtn}
              onPress={() => router.navigate('/diagnosis/common')}
            >
              <Text style={styles.viewAllText}>View All</Text>
              <Ionicons name="arrow-forward" size={16} color={BRAND_GREEN} />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
            {COMMON_DISEASES.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.diseaseCard}
                activeOpacity={0.7}
                onPress={() => router.push(`/diagnosis/${item.id}` as any)}
              >
                <Image source={{ uri: item.image }} style={styles.diseaseImage} contentFit="cover" />
                <Text style={styles.diseaseName}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Ask Expert Banner */}
        <View style={styles.expertBanner}>
          <View style={styles.expertIllustration}>
            <View style={styles.expertCircle}>
              <Text style={styles.expertQMark}>?</Text>
            </View>
          </View>
          <View style={styles.expertContent}>
            <Text style={styles.expertTitle}>Ask Plant Expert</Text>
            <Text style={styles.expertSubtitle}>Our botanists are ready to help with your problems.</Text>
            <Link href="/ask-experts" asChild>
              <TouchableOpacity style={styles.expertBtn} activeOpacity={0.8}>
                <Text style={styles.expertBtnText}>Ask the Experts</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        {/* Explore Diseases Grid */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Explore Diseases</Text>
            <TouchableOpacity style={styles.viewAllBtn}>
              <Text style={styles.viewAllText}>View All</Text>
              <Ionicons name="arrow-forward" size={16} color={BRAND_GREEN} />
            </TouchableOpacity>
          </View>
          <View style={styles.grid}>
            {DISEASE_CATEGORIES.map((category) => (
              <TouchableOpacity key={category.id} style={styles.gridItem} activeOpacity={0.8}>
                <Image source={{ uri: category.image }} style={styles.gridImage} contentFit="cover" />
                <View style={styles.gridOverlay}>
                  <Text style={styles.gridText}>{category.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
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
    width: 32,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  headerRight: {
    padding: 4,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  heroCard: {
    margin: 24,
    backgroundColor: CARD_BG,
    borderRadius: 24,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  heroImageContainer: {
    width: 100,
    height: 120,
  },
  heroImage: {
    flex: 1,
  },
  heroContent: {
    flex: 1,
    gap: 8,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  heroSubtitle: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    lineHeight: 20,
  },
  diagnoseBtn: {
    backgroundColor: BRAND_GREEN,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  diagnoseBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: '600',
    color: BRAND_GREEN,
  },
  horizontalScroll: {
    paddingLeft: 24,
    paddingRight: 8,
    gap: 16,
  },
  diseaseCard: {
    width: 160,
    gap: 8,
  },
  diseaseImage: {
    width: 160,
    height: 120,
    borderRadius: 16,
    backgroundColor: FIELD_BG,
  },
  diseaseName: {
    fontSize: 16,
    fontWeight: '600',
    color: TEXT_PRIMARY,
  },
  expertBanner: {
    margin: 24,
    backgroundColor: FIELD_BG,
    borderRadius: 24,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  expertIllustration: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expertCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 6,
    borderColor: BRAND_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expertQMark: {
    fontSize: 32,
    fontWeight: '700',
    color: BRAND_GREEN,
  },
  expertContent: {
    flex: 1,
    gap: 8,
  },
  expertTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  expertSubtitle: {
    fontSize: 13,
    color: TEXT_SECONDARY,
    lineHeight: 18,
  },
  expertBtn: {
    backgroundColor: BRAND_GREEN,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  expertBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  grid: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  gridItem: {
    width: '47.5%',
    height: 100,
    borderRadius: 16,
    overflow: 'hidden',
  },
  gridImage: {
    ...StyleSheet.absoluteFillObject,
  },
  gridOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  gridText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
});
