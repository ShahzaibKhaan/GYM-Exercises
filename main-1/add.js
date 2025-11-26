import { View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function AddExerciseScreen({ navigation, route }) {

  const { addExercise } = route.params;

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');

  const handleAdd = () => {
    const newExercise = {
      id: Date.now().toString(),
      title: title,
      description: desc,
      image: image,
    };

    addExercise(newExercise);   // ← HomeScreen me add karega
    navigation.goBack();        // ← wapas HomeScreen
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Exercise Name"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Description"
        value={desc}
        onChangeText={setDesc}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />

      <Button title="Add Exercise" onPress={handleAdd} />
    </View>
  );
}
