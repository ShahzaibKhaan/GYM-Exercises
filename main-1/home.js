import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {
  const [exercises, setExercises] = useState([
//     { 
//   id: '1', 
//   title: 'Push-up', 
//   description: 'Do 20 reps', 
//   image: require('../../assets/pushup.png') 
// },

    { id: '1', title: 'Push-up', description: 'Do 20 reps', image:''},
    { id: '2', title: 'Squats', description: 'Do 15 reps', image: '' },
    {id: '3', title: 'Bicep', description: 'Do 15 reps', image: ''},
    {id: '4', title: 'Tricep', description: 'Do 15 reps', image: ''},
    {id: '5', title: 'sit up', description: 'Do 15 reps', image: ''},
    {id: '6', title: 'Plank', description: 'Do 15 reps', image: ''},
    {id: '7', title: 'Dead-lift', description: 'Do 15 reps', image: ''},
    {id: '8', title: 'Dumbbell-presses', description: 'Do 15 reps', image: ''},
  ]);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Add Exercise" onPress={() => navigation.navigate('AddExerciseScreen')} />

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', item)}>
            <Text style={{ fontSize: 20, marginVertical: 10 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
