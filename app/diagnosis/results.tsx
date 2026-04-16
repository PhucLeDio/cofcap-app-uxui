import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import { Image } from 'expo-image';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#757575';
const DIVIDER_COLOR = '#F5F5F5';

type DiseaseResult = {
  id: string;
  name: string;
  badge?: string;
  description: string;
  image: string;
};

const RESULTS: DiseaseResult[] = [
  {
    id: 'abiotic',
    name: 'Abiotic',
    badge: 'Most likely',
    description: 'Abiotic diseases are caused by non-living factors, such as adverse environmental condit...',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&q=80',
  },
  {
    id: 'animalia',
    name: 'Animalia',
    description: 'While most plant diseases are caused by fungi, bacteria, or viruses, there are some instan...',
    image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=400&q=80',
  },
  {
    id: 'fungi',
    name: 'Fungi',
    description: 'Fungal diseases are a common problem for various plants and can impact their growth and health.',
    image: 'https://images.unsplash.com/photo-1528629202416-2da983637651?w=400&q=80',
  },
];

export default function DiagnosisResultsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={[styles.header, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <TouchableOpacity onPress={() => router.navigate('/(tabs)')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Diagnosis</Text>
        <View style={styles.backButton} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Scanned Image with Highlights */}
        <View style={styles.imageSection}>
          <Image 
            source="https://images.unsplash.com/photo-1597055931211-1339d2c5bcc1?w=800&q=80" 
            style={styles.scannedImage}
            contentFit="cover"
          />
          {/* Simulated detection circles */}
          <View style={[styles.detectionCircle, { top: '15%', left: '35%', width: 60, height: 60 }]} />
          <View style={[styles.detectionCircle, { top: '15%', left: '65%', width: 50, height: 50 }]} />
          <View style={[styles.detectionCircle, { top: '40%', left: '50%', width: 70, height: 70 }]} />
          <View style={[styles.detectionCircle, { top: '65%', left: '70%', width: 55, height: 55 }]} />
        </View>

        <View style={styles.resultsHeader}>
          <Text style={styles.resultsTitle}>Possible Disease Problems</Text>
        </View>

        {/* Disease List */}
        <View style={styles.listContainer}>
          {RESULTS.map((item, index) => (
            <Link key={item.id} href={`/diagnosis/${item.id}` as any} asChild>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.diseaseCard}>
                  <Image source={{ uri: item.image }} style={styles.diseaseImage} contentFit="cover" />
                  <View style={styles.diseaseInfo}>
                    <View style={styles.nameRow}>
                      <Text style={styles.diseaseName}>{item.name}</Text>
                      {item.badge && (
                        <View style={styles.badge}>
                          <Text style={styles.badgeText}>{item.badge}</Text>
                        </View>
                      )}
                    </View>
                    <Text style={styles.diseaseDesc} numberOfLines={2}>{item.description}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
                </View>
                {index < RESULTS.length - 1 && <View style={styles.divider} />}
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Action */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
        <TouchableOpacity 
          style={styles.expertBtn} 
          activeOpacity={0.8}
          onPress={() => router.push('/ask-experts' as any)}
        >
          <Text style={styles.expertBtnText}>Ask Experts</Text>
        </TouchableOpacity>
      </View>
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
  scrollContent: {
    paddingBottom: 100,
  },
  imageSection: {
    width: '100%',
    height: 300,
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  scannedImage: {
    width: '100%',
    height: '100%',
  },
  detectionCircle: {
    position: 'absolute',
    borderWidth: 3,
    borderColor: '#FF5252',
    borderRadius: 100,
    backgroundColor: 'rgba(255, 82, 82, 0.1)',
  },
  resultsHeader: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  diseaseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 16,
  },
  diseaseImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
  },
  diseaseInfo: {
    flex: 1,
    gap: 4,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  diseaseName: {
    fontSize: 18,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FF5252',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FF5252',
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
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: SCREEN_BG,
    borderTopWidth: 1,
    borderTopColor: DIVIDER_COLOR,
    paddingTop: 16,
  },
  expertBtn: {
    backgroundColor: BRAND_GREEN,
    height: 56,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: BRAND_GREEN,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  expertBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
