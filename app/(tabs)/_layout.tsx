import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

import { HapticTab } from "@/components/haptic-tab";

// Brand colors - consistent across the app
const BRAND_GREEN = "#00A86B";
const INACTIVE_COLOR = "#A1A1A1";

/**
 * Tab Layout Component
 * Manages the bottom tab navigation with 5 main sections:
 * - Home: Main dashboard
 * - Diagnose: Plant disease diagnosis
 * - Camera: Central action button for taking photos
 * - My Plants: User's plant collection
 * - Account: User profile and settings
 */
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: BRAND_GREEN,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        headerShown: false,
        tabBarButton: HapticTab, // Provides haptic feedback on tab press
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#F5F5F5",
          borderTopWidth: 1,
          height: 70,
          paddingBottom: 10,
          paddingTop: 6,
          elevation: 0, // Remove shadow on Android
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={24}
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      {/* Diagnose Tab */}
      <Tabs.Screen
        name="diagnose"
        options={{
          title: "Diagnose",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={24}
              name={focused ? "shield-checkmark" : "shield-checkmark-outline"}
              color={color}
            />
          ),
        }}
      />
      {/* Camera Tab - Elevated center button */}
      <Tabs.Screen
        name="camera"
        options={{
          title: "",
          tabBarStyle: { display: "none" }, // Hide tab bar on camera screen
          tabBarIcon: () => (
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: BRAND_GREEN,
                justifyContent: "center",
                alignItems: "center",
                top: -15, // Elevate button above tab bar
              }}
            >
              <Ionicons name="camera" size={26} color="#FFFFFF" />
            </View>
          ),
        }}
      />
      {/* My Plants Tab */}
      <Tabs.Screen
        name="my-plants"
        options={{
          title: "My Plants",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={24}
              name={focused ? "leaf" : "leaf-outline"}
              color={color}
            />
          ),
        }}
      />
      {/* Account Tab */}
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={24}
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
