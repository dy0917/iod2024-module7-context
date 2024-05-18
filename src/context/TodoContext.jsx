import React, { useState, useContext, useReducer } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function reducer(state, action) {
  switch (action.type) {
    case 'initTodos':
      return action.payload;
    case 'addTodo':
      return [...state, action.payload];
    case 'updateTodo':
      const tempTodo = action.payload;
      const foundIndex = [...state].indexOf((todo) => todo.id === tempTodo.id);
      const copyState = [...state];
      copyState.splice(foundIndex, 1, tempTodo);
      return copyState;
    default:
      return state;
  }
}
const TodoContext = React.createContext();
// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>
export const TodoProvider = (props) => {
  // store the current user in state at the top level
  const [todos, todoDispatch] = useReducer(reducer, []);
  useEffect(() => {
    axios.get('http://localhost:3000/todos').then((response) => {
      todoDispatch({ type: 'initTodos', payload: response.data });
    });
  }, []);
  return (
    <TodoContext.Provider value={{ todos, todoDispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};
// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useTodoContext = () => {
  return useContext(TodoContext);
};
