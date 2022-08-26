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

        activeOpacity={0.7}
        onPress={props.onPress}
        // onPressIn={()=>console.log('onPressIn클릭!')}
        // onPressOut={()=>console.log('onPressOut클릭!')}
        // onPress={()=>console.log('onPress클릭!')}
        // onLongPress={()=>console.log('onLongPress클릭!')}      
        // accessibilityRole={'checkbox'}
        // accessible={false}
        >
            {/* <Image
                source = {require('/assets/icon/긴 영수증.png')}
                style={{width:50, height:50}}
                >
            </Image> */}
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