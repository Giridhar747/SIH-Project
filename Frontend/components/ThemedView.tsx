import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  
  // Use the provided colors or fall back to the theme colors
  const backgroundColor = colorScheme === 'dark'
    ? darkColor || colors.background
    : lightColor || colors.background;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
