import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

/**
 * Expo Router unstable settings
 * anchor: Defines the initial route anchor point for the app
 */
export const unstable_settings = {
  anchor: "(tabs)",
};

/**
 * Root Layout Component
 * Manages the main navigation structure and theme for the entire app
 * Wraps all screens with ThemeProvider for consistent dark/light mode support
 */
export default function RootLayout() {
  // Detect system color scheme (dark/light mode)
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* Stack Navigator - manages screen transitions and navigation */}
      <Stack screenOptions={{ headerShown: false }}>
        {/* Onboarding & Authentication Screens - no animation for smooth UX */}
        <Stack.Screen
          name="index"
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="walkthrough-1"
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="walkthrough-2"
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="walkthrough-3"
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="welcome"
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="sign-up"
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="sign-up-loading"
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="log-in"
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="log-in-loading"
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="forgot-password"
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="enter-otp"
          options={{ headerShown: false, animation: "none" }}
        />

        {/* Main App Screens */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="bookmarks" options={{ headerShown: false }} />
        <Stack.Screen name="explore/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="explore/[category]"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="plant/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="ask-experts" options={{ headerShown: false }} />
        <Stack.Screen name="chat/[id]" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      {/* StatusBar - auto adjusts based on theme */}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
