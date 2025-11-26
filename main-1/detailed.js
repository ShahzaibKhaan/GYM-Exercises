import { View, Text, Image } from 'react-native';

export default function DetailScreen({ route }) {
  const { title, description, image } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Image source={{ uri: image }} style={{ width: '100%' }} />
      <Text style={{ fontSize: 22, marginTop: 20, fontWeight:700 }}>{title}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>{description}</Text>
    </View>
  );
}
