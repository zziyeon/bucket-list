import React from "react";
import styled from "styled-components/native";
import Proptypes from 'prop-types';

const StyledTouchableOpacity = styled.TouchableOpacity`
    background-color: orange;
    width:100%;
    align-items: center;
    height: 50px;
`;

const StyledText = styled.Text`
    font-size: 30px;
    padding: 5px;
    font-weight: bold;
`;

const LineButton =({text, onPressOut}) =>{
    return (
        <StyledTouchableOpacity onPressOut={onPressOut} >
            <StyledText>{text}</StyledText>
        </StyledTouchableOpacity>
    );
}

LineButton.defaultProps = {
    text:'임시',
    onPressOut: ()=>{}
}

LineButton.Proptypes = {
    text: Proptypes.string.isRequired,
    onPressOut: Proptypes.func.isRequired
}

export default LineButton;
