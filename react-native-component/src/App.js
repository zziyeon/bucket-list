import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import EventInput from './components/EventInput';
import PressableBtn from './components/PressableBtn';

export default function App() {

    return (
        <View style={styles.container}>
            <PressableBtn title='Pressable' />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fef',
        alignItems: 'center',
        justifyContent: 'center',
    },

});