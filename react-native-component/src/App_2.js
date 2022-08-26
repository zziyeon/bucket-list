import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from './components/MyButton';
import Counter from './components/Counter';

export default function App() {


    return (
        <View style={styles.container}>
            <Counter />
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

});