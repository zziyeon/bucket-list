//View -> App->counter->MyButton
import App from './src/App';
export default App;

// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//     const name = '홍길동';
//     const number = 10;
//     return (
//         <View style={styles.container}>
//             <Text style={styles.myfont}>내이름은 {name} 입니다.</Text>
//             <Text>
//                 {
//                     (() => {
//                         if (number % 2 == 0) return '짝수';
//                         else return '홀수';
//                     })()
//                 }
//             </Text>
//             <Text>
//                 {
//                     (() => {
//                         return (number % 2 == 0) ? '짝수' : '홀수'
//                     })()
//                 }
//             </Text>
//             <Text>
//                 {
//                     (() => (number % 2 == 0) ? '짝수' : '홀수')()
//                 }
//             </Text>
//             {number % 2 == 0 && <Text>짝수다</Text>}
//             {number % 2 != 0 && <Text>홀수다</Text>}
//             <StatusBar style="auto" />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     myfont: {
//         fontSize: 50,
//         backgroundColor: 'yellow',
//         color: 'darkgreen',
//         fontWeight: 'bold'
//     }
// });