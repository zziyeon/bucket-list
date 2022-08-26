import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import PropTypes from 'prop-types';

const MyButton = (props) => {
    console.log(props);
    return (
        <TouchableOpacity
        style={{
            backgroundColor: "#3498db",
            paddingHorizontal: props.demension.width,
            paddingVertical: props.demension.height,
            margin:10,
            borderRadius:8
        }}
        onPress={props.onPress}
        >
            <Text style={{fontSize:props.fsize}}>
                {props.title || props.children}
            </Text>
        </TouchableOpacity>
    )
}
MyButton.defaultProps = {
    demension: {width:10, height: 10},
    title:'임시'
}

MyButton.propTypes={
    demension: PropTypes.object.isRequired,
    title: PropTypes.string
}

export default MyButton;