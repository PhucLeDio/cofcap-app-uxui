import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';
import { useState } from 'react';
import { COMMON_DISEASES, DISEASE_DETAILS } from '../../data/diseases';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#757575';
const DIVIDER_COLOR = '#F5F5F5';

const TABS = ['Overview', 'Symptoms', 'Causes', 'Management', 'Prevention'];

export default function DiseaseDetailScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState('Overview');

  const disease = COMMON_DISEASES.find(d => d.id === id);
  const details = DISEASE_DETAILS[id as string] || DISEASE_DETAILS['abiotic'];

  const renderSection = (title: string, content: any, type: 'bullet' | 'number' | 'text') => {
    if (!content) return null;

    return (
      <View style={styles.section} key={title}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {type === 'text' ? (
          <Text style={styles.sectionBody}>{content}</Text>
        ) : (
          <View style={styles.listContainer}>
            {content.map((item: string, index: number) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bulletText}>
                  {type === 'bullet' ? '•' : `${index + 1}.`}
                </Text>
                <Text style={styles.sectionBody}>{item}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={[styles.header, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{disease?.name || 'Detail'}</Text>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="share-outline" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Image 
          source={disease?.image || 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80'} 
          style={styles.featuredImage}
          contentFit="cover"
        />

        <View style={styles.contentSection}>
          <Text style={styles.diseaseTitle}>{disease?.name || 'Disease'}</Text>
          
          {/* Scrollable Tabs - Now acting as a static indicator of sections present */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabScroll} contentContainerStyle={styles.tabContent}>
            {TABS.map((tab) => (
              <View 
                key={tab} 
                style={[styles.tab, activeTab === tab && styles.activeTab]}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
              </View>
            ))}
          </ScrollView>

          {/* All Sections rendered vertically as per long Figma design */}
          {renderSection('Overview', details.overview, 'text')}
          {renderSection('Symptoms', details.symptoms, 'bullet')}
          {renderSection('Causes', details.causes, 'bullet')}
          
          {/* Special section for Pests */}
          {details.pests && renderSection('Common Pests', details.pests, 'number')}
          
          {renderSection('Treatment and Management', details.treatment, 'bullet')}
          {renderSection('Prevention', details.prevention, 'bullet')}
          
          {renderSection('Conclusion', details.conclusion, 'text')}

          {/* Feedback */}
          <View style={styles.feedbackSection}>
            <Text style={styles.feedbackTitle}>Was this helpful?</Text>
            <View style={styles.feedbackButtons}>
              <TouchableOpacity style={styles.feedbackBtn}>
                <Text style={styles.feedbackBtnText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.feedbackBtn}>
                <Text style={styles.feedbackBtnText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: SCREEN_BG },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: SCREEN_BG,
    zIndex: 10,
  },
  headerTitle: { fontSize: 20, fontWeight: '700', color: TEXT_PRIMARY, flex: 1, textAlign: 'center' },
  backButton: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  scrollContent: { paddingBottom: 60 },
  featuredImage: { width: '100%', height: 260 },
  contentSection: { paddingTop: 24 },
  diseaseTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: TEXT_PRIMARY,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  tabScroll: { marginBottom: 32 },
  tabContent: { paddingHorizontal: 16, gap: 8 },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  activeTab: { backgroundColor: BRAND_GREEN },
  tabText: { fontSize: 14, fontWeight: '600', color: TEXT_SECONDARY },
  activeTabText: { color: '#FFFFFF' },
  section: { paddingHorizontal: 20, marginBottom: 32 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: TEXT_PRIMARY, marginBottom: 16 },
  sectionBody: { fontSize: 16, color: TEXT_SECONDARY, lineHeight: 24, flex: 1 },
  listContainer: { gap: 12 },
  listItem: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  bulletText: { fontSize: 16, color: TEXT_SECONDARY, fontWeight: '700' },
  feedbackSection: {
    paddingHorizontal: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: DIVIDER_COLOR,
    paddingTop: 40,
    marginTop: 20,
  },
  feedbackTitle: { fontSize: 18, fontWeight: '700', color: TEXT_PRIMARY, marginBottom: 24 },
  feedbackButtons: { flexDirection: 'row', gap: 16, width: '100%' },
  feedbackBtn: {
    flex: 1,
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedbackBtnText: { fontSize: 15, fontWeight: '600', color: TEXT_PRIMARY },
});
