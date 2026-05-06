import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

export type Pref = "system" | "light" | "dark";

export const ThemePreferenceContext = React.createContext<{
  pref: Pref;
  setPref: (p: Pref) => void;
}>({ pref: "system", setPref: () => {} });

export function useThemePreference() {
  return React.useContext(ThemePreferenceContext);
}

export async function loadThemePreference(): Promise<Pref> {
  try {
    const stored = await AsyncStorage.getItem("themePreference");
    return (stored as Pref) || "system";
  } catch {
    return "system";
  }
}

export async function saveThemePreference(pref: Pref) {
  try {
    await AsyncStorage.setItem("themePreference", pref);
  } catch (error) {
    console.error("Failed to save theme preference:", error);
  }
}

export default null;
