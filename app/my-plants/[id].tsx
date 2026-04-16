import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';
import { useState } from 'react';
import { MY_PLANTS, PLANT_JOURNALS, JournalEvent } from '../../data/my-plants';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#757575';
const TEXT_LIGHT = '#A1A1A1';

const TABS = ['Journal', 'Reminders', 'Plant Info'];
const FILTERS = ['All', 'Watering', 'Fertilizing', 'Misting'];

export default function MyPlantDetailScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState('Journal');
  const [activeFilter, setActiveFilter] = useState('All');

  const plant = MY_PLANTS.find(p => p.id === id) || MY_PLANTS[0];
  const journalEvents = PLANT_JOURNALS[id as string] || PLANT_JOURNALS['prayer-plant'] || [];

  const getActionColor = (action: string) => {
    switch (action) {
      case 'Watering': return '#2D9CDB';
      case 'Fertilizing': return '#EB5757';
      case 'Photo': return '#A4C62B'; // Yellow-green
      case 'Misting': return '#9B51E0';
      case 'Note': return '#4267B2'; // Deep blue
      case 'Rotating': return '#F2994A';
      default: return BRAND_GREEN;
    }
  };

  const getActionIcon = (action: string): keyof typeof Ionicons.glyphMap => {
    switch (action) {
      case 'Watering': return 'water';
      case 'Fertilizing': return 'flower';
      case 'Photo': return 'camera';
      case 'Misting': return 'color-wand';
      case 'Note': return 'document-text';
      case 'Rotating': return 'sunny';
      default: return 'leaf';
    }
  };

  const filteredEvents = activeFilter === 'All' 
    ? journalEvents 
    : journalEvents.filter(e => e.action === activeFilter);

  const renderTimelineEvent = (event: JournalEvent, index: number, isLast: boolean) => {
    const bgColor = getActionColor(event.action);
    const iconName = getActionIcon(event.action);

    return (
      <View key={event.id} style={styles.timelineRow}>
        {/* Timeline Marker Dot */}
        <View style={styles.timelineDotContainer}>
          <View style={styles.timelineDotInner} />
        </View>

        {/* Event Content Card */}
        <View style={[styles.eventCard, isLast && styles.lastEventCard]}>
          <View style={styles.eventHeader}>
            <View style={styles.eventHeaderLeft}>
               <View style={[styles.actionIconCircle, { backgroundColor: bgColor }]}>
                 <Ionicons name={iconName} size={16} color="#FFFFFF" />
               </View>
               <View>
                 <Text style={styles.actionTitle}>{event.action}</Text>
                 <Text style={styles.actionTime}>{event.dateStr}</Text>
               </View>
            </View>
            <TouchableOpacity hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
              <Ionicons name="ellipsis-vertical" size={20} color={TEXT_PRIMARY} />
            </TouchableOpacity>
          </View>
          
          {/* Photos */}
          {event.images && event.images.length > 0 && (
            <View style={styles.photoGrid}>
              {event.images.map((img, i) => (
                <Image key={i} source={{ uri: img }} style={styles.timelinePhoto} contentFit="cover" />
              ))}
            </View>
          )}

          {/* Note */}
          {event.note && (
            <Text style={styles.eventNoteText}>{event.note}</Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header Overlay */}
      <View style={[styles.header, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <TouchableOpacity onPress={() => router.navigate('/(tabs)/my-plants')} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Plant</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="share-social-outline" size={24} color={TEXT_PRIMARY} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="ellipsis-vertical" size={24} color={TEXT_PRIMARY} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: plant.image }} style={styles.coverImage} contentFit="cover" />
        
        {/* Info Block */}
        <View style={styles.infoContainer}>
          <Text style={styles.plantName}>{plant.name}</Text>
          
          <View style={styles.taxonomyRow}>
            <View style={styles.taxColumnLabel}>
               <Text style={styles.taxLabelText}>Genus</Text>
               <Text style={styles.taxLabelText}>Scientific Name</Text>
            </View>
            <View style={styles.taxColumnValue}>
               <Text style={styles.taxValueText}>:  {plant.genus}</Text>
               <Text style={styles.taxValueText}>:  {plant.scientificName}</Text>
            </View>
          </View>

          {/* Top Tabs */}
          <View style={styles.tabsContainer}>
            {TABS.map(tab => (
              <TouchableOpacity 
                key={tab} 
                style={[styles.topTab, activeTab === tab && styles.topTabActive]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.topTabText, activeTab === tab && styles.topTabTextActive]}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {activeTab === 'Journal' && (
            <View style={styles.journalContainer}>
              
              {/* Filters */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersScroll}>
                {FILTERS.map(filter => (
                  <TouchableOpacity 
                    key={filter} 
                    style={[styles.filterPill, activeFilter === filter && styles.filterPillActive]}
                    onPress={() => setActiveFilter(filter)}
                  >
                    <Text style={[styles.filterPillText, activeFilter === filter && styles.filterPillTextActive]}>{filter}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              {/* Add Action Button */}
              <TouchableOpacity style={styles.addActionBtn} activeOpacity={0.8}>
                <Ionicons name="add" size={20} color={BRAND_GREEN} />
                <Text style={styles.addActionText}>Add Action</Text>
              </TouchableOpacity>

              {/* TIMELINE UI */}
              <View style={styles.timelineContainer}>
                 {/* The Continuous Vertical Line */}
                 {filteredEvents.length > 0 && (
                   <View style={styles.timelineVerticalLine} />
                 )}

                 {filteredEvents.map((ev, idx) => 
                   renderTimelineEvent(ev, idx, idx === filteredEvents.length - 1)
                 )}
                 
                 {filteredEvents.length === 0 && (
                    <Text style={{textAlign: 'center', color: TEXT_SECONDARY, marginTop: 40}}>No events found.</Text>
                 )}
              </View>

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
    paddingHorizontal: 12,
    backgroundColor: SCREEN_BG,
    zIndex: 10,
    elevation: 4,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  headerRight: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  coverImage: {
    width: '100%',
    height: 280,
  },
  infoContainer: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  plantName: {
    fontSize: 28,
    fontWeight: '700',
    color: TEXT_PRIMARY,
    marginBottom: 16,
  },
  taxonomyRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  taxColumnLabel: {
    width: 130,
    gap: 8,
  },
  taxColumnValue: {
    flex: 1,
    gap: 8,
  },
  taxLabelText: {
    fontSize: 15,
    color: TEXT_PRIMARY,
  },
  taxValueText: {
    fontSize: 15,
    color: TEXT_PRIMARY,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 4,
    marginBottom: 24,
  },
  topTab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  topTabActive: {
    backgroundColor: BRAND_GREEN,
  },
  topTabText: {
    fontSize: 14,
    fontWeight: '600',
    color: TEXT_SECONDARY,
  },
  topTabTextActive: {
    color: '#FFFFFF',
  },
  journalContainer: {
    flex: 1,
  },
  filtersScroll: {
    gap: 12,
    marginBottom: 24,
  },
  filterPill: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: SCREEN_BG,
  },
  filterPillActive: {
    backgroundColor: BRAND_GREEN,
    borderColor: BRAND_GREEN,
  },
  filterPillText: {
    fontSize: 14,
    fontWeight: '500',
    color: TEXT_PRIMARY,
  },
  filterPillTextActive: {
    color: '#FFFFFF',
  },
  addActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BRAND_GREEN,
    borderRadius: 24,
    paddingVertical: 12,
    marginBottom: 32,
    gap: 8,
  },
  addActionText: {
    fontSize: 16,
    fontWeight: '600',
    color: BRAND_GREEN,
  },
  timelineContainer: {
    position: 'relative',
    paddingLeft: 24, 
  },
  timelineVerticalLine: {
    position: 'absolute',
    left: 8, 
    top: 20, 
    bottom: 40,
    width: 2,
    backgroundColor: BRAND_GREEN,
  },
  timelineRow: {
    position: 'relative',
    marginBottom: 0, 
  },
  timelineDotContainer: {
    position: 'absolute',
    left: -24 - 1, 
    top: 36,     
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: BRAND_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  timelineDotInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
  },
  eventCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    marginLeft: 0,
  },
  lastEventCard: {
    marginBottom: 0,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  eventHeaderLeft: {
    flexDirection: 'row',
    gap: 12,
  },
  actionIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: TEXT_PRIMARY,
    marginBottom: 2,
  },
  actionTime: {
    fontSize: 13,
    color: TEXT_LIGHT,
  },
  photoGrid: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  timelinePhoto: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  eventNoteText: {
    fontSize: 15,
    color: TEXT_SECONDARY,
    lineHeight: 22,
    marginTop: 8,
  },
});
