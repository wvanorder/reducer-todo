import React, { useState } from 'react';

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
            <input
                type='text'
                value={newToDo}
                name='toDo'
                onChange={handleChange}
            />
            <button> Add To Do</button>
        </form>
    )
};

export default ToDoForm;