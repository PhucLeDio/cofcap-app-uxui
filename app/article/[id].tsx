import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform, Modal, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';
import { useState } from 'react';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#424242';
const DIVIDER_COLOR = '#E0E0E0';

const articleData: Record<string, any> = {
  '1': {
    title: 'Unlock the Secrets of Succulents: Care Tips for Thriving Beauties',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80',
    sections: [
      {
        title: 'Unlock the Secrets',
        content: "Succulents, the darlings of the plant world, are not just beautiful—they're also resilient and easy to care for. Here are quick tips to unlock their secrets and keep them thriving:",
      },
      {
        content: "1. Sunlight Love:\nProvide at least 6 hours of bright, indirect sunlight daily.\n\n2. Smart Watering:\nLet the soil dry out completely between watering sessions.\n\n3. Drainage Matters:\nUse well-draining soil and pots with drainage holes.\n\n4. Temperature Sweet Spot:\nKeep them in temperatures between 60°F to 80°F (15°C to 27°C).\n\n5. Size-Aware Potting:\nChoose pots with room for growth and repot as needed.\n\n6. Easy on the Feed:\nFertilize sparingly during the growing season.",
      },
      {
        title: 'Troubleshooting Tips',
        content: "- Yellowing Leaves:\nAdjust watering if leaves turn yellow due to overwatering.\n\n- Leggy Growth:\nMove to a sunnier spot to encourage compact growth.\n\n- Rotting Base:\nTrim affected areas, repot in dry soil, adjust watering.",
      },
      {
        title: 'Conclusion',
        content: 'Succulent care is simple. Find the right balance of sunlight, water, and well-draining soil for thriving, beautiful succulents in your home or garden. Happy succulent growing!',
      },
    ],
    tags: '#SucculentCare #GreenThumb #PlantTips #IndoorGardening #SucculentLove',
  },
};

export default function ArticleDetailScreen() {
  const { id } = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [helpful, setHelpful] = useState<boolean | null>(null);
  const [isShareVisible, setIsShareVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const article = articleData[id as string] || articleData['1']; // Fallback to first article

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Navbar */}
      <View style={[styles.navbar, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.navButton}>
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Article</Text>
        <View style={styles.navActions}>
          <TouchableOpacity onPress={() => setIsShareVisible(true)} style={styles.navButton}>
            <Ionicons name="share-outline" size={24} color={TEXT_PRIMARY} />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {
              const newStatus = !isBookmarked;
              setIsBookmarked(newStatus);
              if (newStatus) {
                setShowToast(true);
                setTimeout(() => setShowToast(false), 2000);
              }
            }} 
            style={styles.navButton}
          >
            <Ionicons name={isBookmarked ? "bookmark" : "bookmark-outline"} size={24} color={isBookmarked ? BRAND_GREEN : TEXT_PRIMARY} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header Image */}
        <Image source={{ uri: article.image }} style={styles.headerImage} contentFit="cover" />

        <View style={styles.contentContainer}>
          {/* Article Title */}
          <Text style={styles.articleTitle}>{article.title}</Text>

          {/* Sections */}
          <View style={styles.sectionsContainer}>
            {article.sections.map((section: any, index: number) => (
              <View key={index} style={styles.section}>
                {section.title && <Text style={styles.sectionTitle}>{section.title}</Text>}
                <Text style={styles.sectionBody}>{section.content}</Text>
              </View>
            ))}
          </View>

          {/* Tags */}
          <Text style={styles.tags}>{article.tags}</Text>

          {/* Feedback Section */}
          <View style={styles.feedbackSection}>
            <Text style={styles.feedbackTitle}>Was this helpful?</Text>
            <View style={styles.feedbackButtons}>
              <TouchableOpacity 
                style={[styles.feedbackChip, helpful === true && styles.activeFeedbackChip]} 
                onPress={() => setHelpful(true)}
              >
                <Text style={[styles.feedbackText, helpful === true && styles.activeFeedbackText]}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.feedbackChip, helpful === false && styles.activeFeedbackChip]} 
                onPress={() => setHelpful(false)}
              >
                <Text style={[styles.feedbackText, helpful === false && styles.activeFeedbackText]}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Share Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShareVisible}
        onRequestClose={() => setIsShareVisible(false)}
      >
        <Pressable 
          style={styles.modalOverlay} 
          onPress={() => setIsShareVisible(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHandle} />
            <Text style={styles.modalTitle}>Share</Text>
            
            {/* Recent People */}
            <View style={styles.modalSection}>
              <View style={styles.sectionDividerRow}>
                <Text style={styles.modalSectionTitle}>Recent people</Text>
                <View style={styles.sectionDividerLine} />
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.peopleList}>
                {[
                  { name: 'Charlotte Hanlin', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', platform: 'logo-whatsapp', color: '#25D366' },
                  { name: 'Kristin Watson', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', platform: 'logo-facebook', color: '#1877F2' },
                  { name: 'Clinton Mcclure', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80', platform: 'logo-instagram', color: '#E4405F' },
                  { name: 'Maryland Winkles', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80', platform: 'logo-whatsapp', color: '#25D366' },
                  { name: 'Alexia Hershey', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80', platform: 'logo-whatsapp', color: '#25D366' },
                ].map((item, index) => (
                  <View key={index} style={styles.personItem}>
                    <View style={styles.avatarContainer}>
                      <Image source={{ uri: item.image }} style={styles.avatar} />
                      <View style={[styles.platformBadge, { backgroundColor: item.color }]}>
                        <Ionicons name={item.platform as any} size={10} color="#FFFFFF" />
                      </View>
                    </View>
                    <Text style={styles.personName} numberOfLines={1}>{item.name}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>

            {/* Social Media */}
            <View style={styles.modalSection}>
              <View style={styles.sectionDividerRow}>
                <Text style={styles.modalSectionTitle}>Social media</Text>
                <View style={styles.sectionDividerLine} />
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.socialList}>
                {[
                  { name: 'WhatsApp', icon: 'logo-whatsapp', color: '#25D366' },
                  { name: 'Facebook', icon: 'logo-facebook', color: '#1877F2' },
                  { name: 'Instagram', icon: 'logo-instagram', color: '#E4405F' },
                  { name: 'Messenger', icon: 'chatbubble-ellipses', color: '#0084FF' },
                  { name: 'Twitter', icon: 'logo-twitter', color: '#1DA1F2' },
                ].map((item, index) => (
                  <View key={index} style={styles.socialItem}>
                    <View style={[styles.socialIconContainer, { backgroundColor: item.color + '15' }]}>
                      <Ionicons name={item.icon as any} size={28} color={item.color} />
                    </View>
                    <Text style={styles.socialName}>{item.name}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </Pressable>
      </Modal>

      {/* Bookmark Toast */}
      {showToast && (
        <View style={styles.toastContainer}>
          <View style={styles.toast}>
            <View style={styles.checkBadge}>
              <Ionicons name="checkmark" size={16} color="#FFFFFF" />
            </View>
            <Text style={styles.toastText}>Added to Bookmarks!</Text>
          </View>
        </View>
      )}
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
  navActions: {
    flexDirection: 'row',
    gap: 16,
  },
  navButton: {
    padding: 4,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  headerImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#EEEEEE',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  articleTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: TEXT_PRIMARY,
    lineHeight: 38,
    marginBottom: 24,
  },
  sectionsContainer: {
    gap: 24,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  sectionBody: {
    fontSize: 18,
    fontWeight: '500',
    color: TEXT_SECONDARY,
    lineHeight: 28,
  },
  tags: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: '500',
    color: BRAND_GREEN,
    lineHeight: 28,
  },
  feedbackSection: {
    marginTop: 40,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: DIVIDER_COLOR,
    gap: 16,
  },
  feedbackTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  feedbackButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  feedbackChip: {
    flex: 1,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: DIVIDER_COLOR,
  },
  activeFeedbackChip: {
    backgroundColor: BRAND_GREEN,
    borderColor: BRAND_GREEN,
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: '600',
    color: TEXT_PRIMARY,
  },
  activeFeedbackText: {
    color: '#FFFFFF',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: SCREEN_BG,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 8,
    paddingBottom: 40,
  },
  modalHandle: {
    width: 40,
    height: 4,
    backgroundColor: DIVIDER_COLOR,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: TEXT_PRIMARY,
    textAlign: 'center',
    marginBottom: 24,
  },
  modalSection: {
    marginBottom: 24,
  },
  sectionDividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
    gap: 12,
  },
  modalSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#757575',
  },
  sectionDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: DIVIDER_COLOR,
  },
  peopleList: {
    paddingHorizontal: 16,
    gap: 16,
  },
  personItem: {
    alignItems: 'center',
    width: 80,
    gap: 8,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EEEEEE',
  },
  platformBadge: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: SCREEN_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  personName: {
    fontSize: 12,
    fontWeight: '500',
    color: TEXT_PRIMARY,
    textAlign: 'center',
  },
  socialList: {
    paddingHorizontal: 16,
    gap: 20,
  },
  socialItem: {
    alignItems: 'center',
    gap: 8,
  },
  socialIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialName: {
    fontSize: 12,
    fontWeight: '500',
    color: TEXT_PRIMARY,
  },
  toastContainer: {
    position: 'absolute',
    top: 110,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000,
  },
  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 8,
    gap: 16,
    width: 280,
    ...Platform.select({
      ios: {
        shadowColor: '#04060F',
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.16,
        shadowRadius: 48,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  checkBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: BRAND_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastText: {
    fontSize: 18,
    fontWeight: '600',
    color: TEXT_PRIMARY,
  },
});
