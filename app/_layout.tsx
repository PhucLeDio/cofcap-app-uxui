import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="walkthrough-1" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="walkthrough-2" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="walkthrough-3" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="welcome" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="sign-up-loading" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="log-in" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="log-in-loading" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="forgot-password" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="enter-otp" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
