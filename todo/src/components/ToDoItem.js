import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import '../App.css';



const ToDoItem = props => {
    const dateArr = moment(props.toDo.dueDate).fromNow().split(' ');

    console.log(dateArr);

    let isLate = false;


    if(dateArr[1] === 'month' || dateArr[1] === 'months'){
         isLate = true;
    } else if(dateArr[0] > 1 && dateArr[1] === 'weeks' ) {
         isLate = true;
    } 
    else if(dateArr[1] === 'year' || dateArr[1] === 'years'){
         isLate = true;
    } else {
         isLate = false;
    }

    console.log( 'Am I late ? ', isLate);

    const Toodoo = styled.div`
    width: 700px;
    height: 230px;
    margin: 20px 20px;
    border-radius: 15%;
    font-size: ${isLate  && !props.toDo.isCompleted ? '50px' : '35px'};
    color: ${isLate  && !props.toDo.isCompleted ? 'tomato' : 'darkslategrey'};
    background-color: ${props.toDo.isCompleted ? 'mediumaquamarine' : 'beige'};
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    p{
        width: 70%;
    }
`

    return (
        <div>
             <Toodoo
            onClick ={() => props.toggleCompleted(props.toDo.id)} >
            <p>{props.toDo.description}  <br /> due : {moment(props.toDo.dueDate).format('MM-DD-YYYY')}</p>
            <Button onClick={() => props.deleteToDo(props.toDo.id)} >Delete ToDo</Button>
        </Toodoo>
        
        </div>
       
    )
};

export default ToDoItem;

const Button = styled.button`
    background-color: darkred;
    color: white;
    font-size: 36px;
    width: 20%;
    height: 40%;
    border-radius: 30%;
    &:hover{
        background-color: orangered;
        transition-duration: 0.2s;
    }
`