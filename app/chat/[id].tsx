import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BRAND_GREEN = '#00A86B';
const SCREEN_BG = '#FFFFFF';
const TEXT_PRIMARY = '#212121';
const TEXT_SECONDARY = '#757575';
const USER_BUBBLE = BRAND_GREEN;
const SENDER_BUBBLE = '#F5F5F5';

const mockExperts: Record<string, { name: string; image: string }> = {
  '1': { name: 'Dr. Ly Quynh Tran', image: 'https://i.pravatar.cc/150?u=1' },
  '2': { name: 'Prof. Benjamin Woods', image: 'https://i.pravatar.cc/150?u=2' },
  '3': { name: 'Dr. Amelia Rodriguez', image: 'https://i.pravatar.cc/150?u=3' },
  '4': { name: 'Prof. James Harper', image: 'https://i.pravatar.cc/150?u=4' },
  '5': { name: 'Dr. Emily Baker', image: 'https://i.pravatar.cc/150?u=5' },
  '6': { name: 'Prof. Samuel Chen', image: 'https://i.pravatar.cc/150?u=6' },
  '7': { name: 'Dr. Grace Turner', image: 'https://i.pravatar.cc/150?u=7' },
  '8': { name: 'Prof. Xavier Garcia', image: 'https://i.pravatar.cc/150?u=8' },
};

export default function ChatScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [message, setMessage] = useState('');

  const expert = mockExperts[id as string] || mockExperts['1'];

  const [chatHistory, setChatHistory] = useState([
    { id: '1', text: `Hello ${expert.name.split(' ')[0]}! My orchid plant is infected with disease. Can you help?`, sender: 'user', time: '09:41' },
    { id: '2', text: "Hi there! I'm glad to help. Can you describe the symptoms your orchids are showing?", sender: 'expert', time: '09:41' },
    { id: '3', text: "The leaves are developing weird spots, and some are turning yellow.", sender: 'user', time: '09:42' },
    {
      id: '4',
      images: [
        'https://images.unsplash.com/photo-1599933333331-ae1059f13115?w=400&q=80',
        'https://images.unsplash.com/photo-1620127252536-03bdfcf6d5c3?w=400&q=80'
      ],
      sender: 'user',
      time: '09:42'
    },
    { id: '5', text: "Thank you for the details. It's crucial to identify the issue accurately. Yellowing and spots might indicate a fungal or bacterial infection.", sender: 'expert', time: '09:43' },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

    const newUserMsg = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      time: timeStr
    };

    setChatHistory(prev => [...prev, newUserMsg]);
    setMessage('');

    // Simple Auto-reply from Expert
    setTimeout(() => {
      const expertMsg = {
        id: (Date.now() + 1).toString(),
        text: "I understand. I'm looking into it and will get back to you shortly with more advice!",
        sender: 'expert',
        time: timeStr
      };
      setChatHistory(prev => [...prev, expertMsg]);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Navbar */}
      <View style={[styles.navbar, { paddingTop: Platform.OS === 'ios' ? insets.top : 44 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.navButton}>
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.navTitle} numberOfLines={1}>{expert.name}</Text>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="ellipsis-vertical" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <ScrollView contentContainerStyle={styles.chatContent} showsVerticalScrollIndicator={false}>
        {chatHistory.map((item) => (
          <View key={item.id} style={[
            styles.messageRow,
            item.sender === 'user' ? styles.userRow : styles.expertRow
          ]}>
            {item.text && (
              <View style={[
                styles.bubble,
                item.sender === 'user' ? styles.userBubble : styles.expertBubble
              ]}>
                <Text style={[
                  styles.messageText,
                  item.sender === 'user' ? styles.userText : styles.expertText
                ]}>{item.text}</Text>
                <View style={styles.timeRow}>
                  <Text style={[
                    styles.timeText,
                    item.sender === 'user' ? styles.userTimeText : styles.expertTimeText
                  ]}>{item.time}</Text>
                  {item.sender === 'user' && (
                    <Ionicons name="checkmark-done" size={16} color="#FFFFFF" style={{ marginLeft: 4 }} />
                  )}
                </View>
              </View>
            )}
            {item.images && (
              <View style={styles.imagesContainer}>
                {item.images.map((img, idx) => (
                  <Image key={idx} source={{ uri: img }} style={styles.messageImage} />
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Input Bar */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <View style={[styles.inputBar, { paddingBottom: Math.max(insets.bottom, 24) }]}>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.inputAction}>
              <Ionicons name="camera-outline" size={24} color="#757575" />
            </TouchableOpacity>
            <TextInput
              placeholder="Type message ..."
              placeholderTextColor="#BDBDBD"
              style={styles.textInput}
              value={message}
              onChangeText={setMessage}
              multiline
            />
            <TouchableOpacity style={styles.inputAction}>
              <Ionicons name="attach-outline" size={24} color="#757575" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Ionicons name="send" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  navTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: TEXT_PRIMARY,
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  navButton: {
    padding: 4,
    width: 32,
  },
  chatContent: {
    padding: 24,
    gap: 16,
  },
  messageRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  userRow: {
    justifyContent: 'flex-end',
  },
  expertRow: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '80%',
    padding: 16,
    borderRadius: 20,
  },
  userBubble: {
    backgroundColor: USER_BUBBLE,
    borderBottomRightRadius: 4,
  },
  expertBubble: {
    backgroundColor: SENDER_BUBBLE,
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
  userText: {
    color: '#FFFFFF',
  },
  expertText: {
    color: TEXT_PRIMARY,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 4,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  userTimeText: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
  expertTimeText: {
    color: TEXT_SECONDARY,
  },
  imagesContainer: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    maxWidth: '80%',
  },
  messageImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#EEEEEE',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingTop: 12,
    backgroundColor: SCREEN_BG,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    gap: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 20,
    paddingHorizontal: 12,
    minHeight: 52,
  },
  inputAction: {
    padding: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: TEXT_PRIMARY,
    paddingVertical: 10,
    maxHeight: 100,
  },
  sendButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: BRAND_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
