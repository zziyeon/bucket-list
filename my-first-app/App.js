import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container2}>
      <Text style = {styles.fcolor}>잘~ 돌아간다~~~</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 1,
    backgroundColor: '#259',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ees',
  },

  fcolor: {
    color: '#ffe',
    fontSize: 30,
    fontWeight:'bold',
    fontStyle:"italic",
    letterSpacing: 2,
    textDecorationLine:'underline',
    textShadowColor:'#eee',
    textShadowOffset:{width:20, height: 30}
  }
});
