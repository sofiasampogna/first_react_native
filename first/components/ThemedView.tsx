import { View, type ViewProps } from 'react-native';
import { Colors } from '@/constants/Colors';  // Import Colors from your constants

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = lightColor || Colors.background;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
