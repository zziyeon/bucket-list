import React, {useState} from "react";
import {View, Text} from 'react-native';
import MyButton from "./MyButton";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);

    //const arr = useState(0);
    //const count = arr[0];
    //const setCount = arr[1];

    const _incress = () => {
        setCount (count +1);
        setDouble (double +2);
    }
    const _decress = () => {
        setCount (count -1);
        setDouble (double -2);
    }
    return (
        <View style = {{alignItems: 'center'}}>
            <Text style={{fontSize: 30, margin: 10}}>count: {count}</Text>
            <Text style={{fontSize: 30, margin: 10}}>double: {double}</Text>
            <MyButton title="+" onPress={_incress} />
            <MyButton title="-" onPress={_decress} />
        </View>
    );
};

export default Counter;