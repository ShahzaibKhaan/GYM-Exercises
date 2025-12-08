// import { View, Text, Image } from 'react-native';

// export default function DetailScreen({ route }) {
//   const { exercise } = route.params;

//   return (
//     <View style={{ padding: 20 }}>
      
//       {exercise.image ? (
//         <Image 
//           style={{ width: '100%', height: 200, resizeMode: 'cover', borderRadius: 10 }} 
//         />
//       ) : (
//         <View 
//           style={{ 
//             width: '100%', 
//             height: 200, 
//             backgroundColor: '#ddd',
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderRadius: 10
//           }}>
//           <Text>No Image</Text>
//         </View>
//       )}

//       <Text style={{ fontSize: 22, marginTop: 20, fontWeight: '700' }}>
//         {exercise.title}
//       </Text>

//       <Text style={{ fontSize: 18, marginTop: 10 }}>
//         {exercise.description}
//       </Text>
//     </View>
//   );
// }
import { View, Text, Image } from 'react-native';

export default function DetailScreen({ route }) {
  const { exercise } = route.params; // pura exercise object le rahe hain

  return (
    <View style={{ padding: 20 }}>
      {/* Image */}
      {exercise.image ? (
        <Image source={exercise.image} style={{ width: '100%', height: 150, marginBottom: 10 }} />
      ) : (
        <View style={{ width: '100%', height: 150, backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
          <Text>No Image</Text>
        </View>
      )}

      {/* Title */}
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>
        {exercise.title}
      </Text>

      {/* Description */}
      <Text style={{ fontSize: 16, color: 'gray' }}>
        {exercise.description}
      </Text>
    </View>
  );
}
