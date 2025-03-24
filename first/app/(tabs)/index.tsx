import { Image, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: '#FF4800', light: '#FF4800' }}
        headerImage={
          <Image
            source={require('@/assets/images/75.png')}
            style={styles.reactLogo}
          />
        }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Hello World!</ThemedText>
        </ThemedView>
      </ParallaxScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc8b2', // Light peach background
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: '75%', // Adjust logo height to be 75% of header height
    position: 'absolute', // Position it absolutely within the header
    bottom: 0, // Stick it to the bottom
    left: 0, // Stick it to the left
  },
});
