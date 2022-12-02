import React, { useState, useEffect } from 'react';
import {
        StyledInput,
        StyledAdd,
        StyledTodoList, 
        StyledTodoItem, 
        StyledTodoText, 
        StyledTodoButton
} from './styledTodoList.js';

function TodoList() {

  const getLocal = () => {
    let list = localStorage.getItem('lists');
    console.log(list);

    if (list){
      return JSON.parse(localStorage.getItem('lists'));
    } else {
      return [];
    }
  }
  
  const [input, setInput] = useState("");
  const [list, setList] = useState(getLocal());

  

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    // add list
    setList([...list, newTodo]);

    //clear list
    setInput("");

  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  }

  // add localStorage 
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <h1>Todo List</h1>
      <StyledInput
        type="text" 
        placeholder='Start your list here'
        value={input} 
        onChange={
        (e) => setInput(e.target.value)
        }
      /> 
      <StyledAdd onClick={() => addTodo(input)}>Add</StyledAdd>

      <StyledTodoList>
        {list.map((todo) => (
          <StyledTodoItem key={todo.id}>
          
            <StyledTodoText>{todo.todo}</StyledTodoText>
            <StyledTodoButton onClick={() => deleteTodo(todo.id)}>&times;</StyledTodoButton>
          
          </StyledTodoItem>
        ))}
      </StyledTodoList>
    </div>
  )
}

export default TodoList;