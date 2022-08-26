import React from "react";
import {TouchableOpacity} from 'react-native';
import styled from "styled-components/native";
import Proptypes from 'prop-types';
import {images} from '../images';

const Icon = styled.Image`
  /* tint-color: ${({completed,theme})=>completed ? theme.done : theme.text}; */
  tint-color: ${({theme})=>theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const IconButton = ({type, onPressOut, id})=> {
    const _onPressOut =()=>{
        onPressOut(id);
      };

    return (
        <TouchableOpacity onPressOut={_onPressOut}>
            <Icon source={type} />
        </TouchableOpacity>
    );
};

IconButton.defaultProps = {
    onPressOut:()=>{}
  }

IconButton.Proptypes = {
    type: Proptypes.oneOf(Object.values(images)).isRequired,
    onPressOut: Proptypes.func,
    id: Proptypes.string,
    completed: Proptypes.bool,
};

export default IconButton;
