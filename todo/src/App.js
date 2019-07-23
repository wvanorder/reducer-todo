import React, { useReducer } from 'react';
import { reducer, initialState } from './reducers/reducer';
import moment from 'moment';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './App.css';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 128px;
  margin: 0 auto;
`

function App() {
  const [{ toDos }, dispatch] = useReducer(reducer, initialState);

  const testDate = parseFloat(moment('2019-03-23').fromNow());
  console.log(testDate);

  const addToDo = (e, toDo) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO' , payload: toDo });
  };

  const toggleToDo = toDoId => {
    dispatch({ type: 'TOGGLE_TODO', payload: toDoId });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED' })
  };

  const deleteToDo = toDoId => {
    dispatch({ type: 'DELETE_TODO', payload: toDoId})
  }

  return (
    <div className="App">
      <H1>{toDos.length > 0 ? `Git 'Er Done` : `Got 'Er Done` }</H1>
      <ToDoForm addToDo={addToDo} />
      <ToDoList
        toDos={toDos}
        toggleToDo={toggleToDo}
        clearCompleted={clearCompleted}
        deleteToDo={deleteToDo}
      />
    </div>
  );
}

export default App;
