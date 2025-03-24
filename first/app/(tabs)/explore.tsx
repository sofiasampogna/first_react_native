import { StyleSheet, Image, Platform } from 'react-native';

import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: '#FF4800', light: '#FF4800' }}
        headerImage={
          <Image
            source={require('@/assets/images/75.png')}
            style={styles.headerImage}
          />
        }>
      </ParallaxScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
