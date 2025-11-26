import { View, Text, Image } from 'react-native';

export default function DetailScreen({ route }) {
  const { exercise } = route.params;

  return (
    <View style={{ padding: 20 }}>
      
      {exercise.image ? (
        <Image 
          source={{ uri: exercise.image }} 
          style={{ width: '100%', height: 200, resizeMode: 'cover', borderRadius: 10 }} 
        />
      ) : (
        <View 
          style={{ 
            width: '100%', 
            height: 200, 
            backgroundColor: '#ddd',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
          }}>
          <Text>No Image</Text>
        </View>
      )}

      <Text style={{ fontSize: 22, marginTop: 20, fontWeight: '700' }}>
        {exercise.title}
      </Text>

      <Text style={{ fontSize: 18, marginTop: 10 }}>
        {exercise.description}
      </Text>
    </View>
  );
}
