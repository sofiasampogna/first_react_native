import { Text, type TextProps, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';  // Import Colors from your constants

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'count' | 'staticCount';
};

export function ThemedText({
  style,
  lightColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  // Directly use the light color from Colors (no dark mode logic)
  const color = lightColor || Colors.text;

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'count' ? styles.count : undefined,
        type === 'staticCount' ? styles.staticCount : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0A7EA4FF',       
  },
  count: {
    fontSize: 100, 
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  staticCount: {
    fontSize: 20,
    fontFamily: 'Montserrat',
    marginLeft: -2, 
    marginTop: 80,
    fontWeight: 'bold',
  },
});
