/**
 * Theme Color Hook
 * Provides theme-aware color values based on current color scheme
 *
 * @param props - Optional light/dark color overrides
 * @param colorName - Key from Colors theme object
 * @returns The appropriate color value for current theme
 *
 * @example
 * const backgroundColor = useThemeColor({}, 'background');
 * const customColor = useThemeColor({ light: '#fff', dark: '#000' }, 'text');
 */

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  // Use prop override if provided, otherwise use theme color
  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
