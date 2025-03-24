import { useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const TASKS = [
  { name: 'Workout', icon: require('@/assets/icons/outdoor_workout.svg') },
  { name: 'Read', icon: require('@/assets/icons/read.svg') },
  { name: 'Diet', icon: require('@/assets/icons/diet.svg') },
  { name: 'Water', icon: require('@/assets/icons/water.svg') },
];

export default function HomeScreen() {
  const [day, setDay] = useState(1); 
  const [completedTasks, setCompletedTasks] = useState(Array(TASKS.length).fill(false));

  const toggleTask = (index: number) => {
    const updatedTasks = [...completedTasks];
    updatedTasks[index] = !updatedTasks[index]; // Toggle task state
    setCompletedTasks(updatedTasks);
  };

  const progress = completedTasks.filter(Boolean).length / TASKS.length;

  return (
    <ThemedView style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: '#FF4800', light: '#FF4800' }}
        headerImage={<Image source={require('@/assets/images/75.png')} style={styles.reactLogo} />}
      >
        <ThemedView style={styles.dayCountContainer}>
          <ThemedText type="count">{day}</ThemedText>
          <ThemedText type="staticCount">/75</ThemedText>
        </ThemedView>

        <View style={styles.checklistContainer}>
          {TASKS.map((task, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.taskItem,
                completedTasks[index] ? styles.completedTask : styles.incompleteTask,
              ]}
              onPress={() => toggleTask(index)}
            >
              <Image source={task.icon} style={styles.taskIcon} />
              <Text style={styles.taskText}>{task.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ParallaxScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc8b2',
  },
  reactLogo: {
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  checklistContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FF4800',
    width: 150, // Adjust as needed
    justifyContent: 'center',
  },
  incompleteTask: {
    backgroundColor: 'white',
  },
  completedTask: {
    backgroundColor: '#FF4800',
  },
  taskText: {
    fontSize: 18,
    fontFamily: 'Koulen',
    color: '#FF4800',
    marginLeft: 8,
  },
  taskIcon: {
    width: 24,
    height: 24,
    tintColor: '#FF4800', // Color matches text
  },
  titleContainer: {
    alignItems: 'center', 
    marginBottom: 10, 
  },
  dayLabel: {
    fontSize: 32,
    fontFamily: 'Koulen',
    color: '#FF4800',
  },
  dayCountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
