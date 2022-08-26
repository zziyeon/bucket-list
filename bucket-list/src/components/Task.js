import React, {useState} from "react";
 import styled from "styled-components/native";
 import PropTypes from 'prop-types';
import IconButton from './IconButton';
import {images} from '../images';
import Input from './Input';
import { Button } from "react-native";
const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${({theme})=>theme.itemBackground};
    padding: 5px;
    margin: 3px 0;
`;

const Contents = styled.Text`
  flex:1;
  font-size: 24px;
  color: ${({completed, theme})=>completed ? theme.done : theme.text};
  text-decoration: ${({completed})=> completed ? 'line-through' : 'none'};
`;

const Task = ({item, deleteTask, toggleTask, updateTask})=> {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);

    //항목 입력 완료시
    const _onSubmitEditing = ()=>{
        if(isEditing){
        const editedTask = {...item , text};  // text:수정된 텍스트
        setIsEditing(false);
        updateTask(editedTask);
        }
    }
    //수정버튼 클릭시
    const _handleUpdateButtonPress = ()=>{
        setIsEditing(true);
    }

    return isEditing ? (
        <Input
        value={text}
        placeholder={'항목을 작성바랍니다'}
        onChangeText={text=>setText(text)}      //입력필드가 수정될때마다
        onSubmitEditing={_onSubmitEditing}   //입력완료시
    />
    ):(
        <Container>
            {/* 완료버튼 */}
            <IconButton
             type={item.completed ? images.completed : images.uncompleted}
             id={item.id}  
             onPressOut={toggleTask}
             completed={item.completed} />

            <Contents completed={item.completed}>{item.text}</Contents>
            {/* 수정버튼 */}
            {item.completed || <IconButton type={images.update} onPressOut={_handleUpdateButtonPress}/>}
            {/* 삭제버튼 */}
            <IconButton type={images.delete}
                                id={item.id}
                                onPressOut={deleteTask}
                                completed={item.completed}  />
            {item.completed}
        </Container>
    );
};

Task.propTypes = {
    task:PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
  }

  export default Task;