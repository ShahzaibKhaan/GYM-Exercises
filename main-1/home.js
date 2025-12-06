
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {
  const [exercises, setExercises] = useState([
    { id: '1', title: 'Push-up', description: 'A push-up is a strength-building exercise where you lie face down, support your body on your hands and toes, and push your body up and down by bending and straightening your arm', image: '' },
    { id: '2', title: 'Squats', description: 'A squat is a strength exercise where you lower your hips from a standing position and then return to standing', image: '' },
    { id: '3', title: 'Bicep', description: 'A "bicep" can refer to either the anatomical biceps brachii muscle in the upper arm or the Bicep language for deploying Azure resources.', image: '' },
    { id: '4', title: 'Tricep', description: 'The triceps, or triceps brachii, is a large muscle on the back of the upper arm with three heads: long, lateral, and medial. ', image: '' },
    { id: '5', title: 'sit up', description: 'A sit-up is a classic core exercise that involves lying on your back with knees bent, feet flat on the floor, and lifting your upper body towards your knees using your abdominal muscles.', image: '' },
    { id: '6', title: 'Plank', description: 'A plank involves balancing on toes and forearms as you hold the rest of your body off the ground. Your spine is kept in a neutral position and your head, torso, and legs are aligned. Planking is an isometric exercise since keep your core muscles contracted in one position.', image: '' },
    { id: '7', title: 'Dead-lift', description: 'The deadlift is a great way to build strong legs and butt. In a deadlift, you lift weight from the ground to thigh level using primarily your leg and hip muscles, but with the assistance of most of the large muscle groups of your body. The deadlift is usually performed with a bar and plates or a fixed barbell, but you can do it with dumbbells. It is a specialty of powerlifters that you should not ignore in general fitness training.Make deadlifts part of your strength- training workouts to build muscle and functional fitness.', image: '' },
    { id: '8', title: 'Dumbbell-presses', description: 'The dumbbell overhead press can be done in either a sitting or standing position and with dumbbells held horizontally at the shoulders or rotated in a hammer grip. You can use this exercise in any upper body strength workout.', image: '' },
  ]);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Add Exercise" onPress={() => navigation.navigate('AddExerciseScreen', {
        addExercise: (newExercise) => {
          setExercises([...exercises, newExercise]);
        }
      })}
      />

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { exercise: item })}
          >
            <Text style={{ fontSize: 20, marginVertical: 10 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
