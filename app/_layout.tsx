import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import {
    ThemePreferenceContext,
    loadThemePreference,
    saveThemePreference,
    type Pref,
} from "./contexts/theme-preference";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [pref, setPrefState] = React.useState<Pref>("system");
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    loadThemePreference().then((savedPref) => {
      setPrefState(savedPref);
      setIsLoaded(true);
    });
  }, []);

  const setPref = React.useCallback((newPref: Pref) => {
    setPrefState(newPref);
    saveThemePreference(newPref);
  }, []);

  const effective = pref === "system" ? colorScheme : pref;

  if (!isLoaded) return null;

  return (
    <ThemePreferenceContext.Provider value={{ pref, setPref }}>
      <ThemeProvider value={effective === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
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
          <Stack.Screen name="upgrade-plan" options={{ headerShown: false }} />
          <Stack.Screen
            name="account-linked-accounts"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="account-appearance"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="account-appearance-theme"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="account-appearance-language"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="account-data-analytics"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="account-payment-methods"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="account-add-payment"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="account-payment-added"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="account-my-profile"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="account-notifications"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="account-security"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="account-billing-subscriptions"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="select-payment-method"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="review-summary"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="processing-payment"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="upgrade-plan-success"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="modal"
            options={{ presentation: "modal", title: "Modal" }}
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}
