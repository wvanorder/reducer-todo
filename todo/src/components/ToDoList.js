import React from 'react';
import ToDoItem from './ToDoItem';
import styled from 'styled-components';
import { ClearButton } from '../styledComponents'

const List = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-content: center;
`

const ToDoList = props => {
    return(
        <div>
            <List>
            {props.toDos.map(toDo => (
                <ToDoItem key={toDo.id} toDo={toDo} toggleCompleted={props.toggleToDo} deleteToDo={props.deleteToDo}/>
            ))}
            
            </List>
            <ClearButton onClick={props.clearCompleted}> Delete Completed Items</ClearButton>
        </div>
        
    )
};

export default ToDoList;