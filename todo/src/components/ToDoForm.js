import React, { useState } from 'react';
import { SubmitButton, Input } from '../styledComponents';


const ToDoForm = props => {
    const [newToDo, editNewToDo] = useState('');

    const handleChange = e => {
        editNewToDo(e.target.value)
    }
    
    const submitToDo = e => {
        e.preventDefault();
        props.addToDo(e, newToDo);
        editNewToDo('');
    }

    return(
        <form onSubmit={submitToDo}>
            <Input
                type='text'
                value={newToDo}
                name='toDo'
                onChange={handleChange}
            />
            <SubmitButton> Add To Do</SubmitButton>
        </form>
    )
};

export default ToDoForm;