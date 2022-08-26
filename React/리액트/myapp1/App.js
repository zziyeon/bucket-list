import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Component1 from './src/test1.js';
import mycom1 from './src/test1.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>앱을 열었다</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// export default function App(){
//   const str='울산KH정보교육원';
//   return (
//     <div>
//         <p>{str}</p>
//         <Component1/> 
//     </div>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
