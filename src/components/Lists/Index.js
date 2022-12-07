import React, { useState, useEffect } from 'react';
import {
  StyledTitle,
  StyledInput,
  StyledAdd,
  StyledTodoList, 
  StyledTodoItem, 
  StyledTodoText, 
  StyledTodoButton
} from './styledTodoList.js';
import { 
  FaTrashAlt
} from 'react-icons/fa';

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
      <StyledTitle> Your List </StyledTitle>
      <StyledInput
        type="text" 
        placeholder='Start your list here'
        maxlength="10"
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
            <div style={{
              width: '30%'
            }}>
              <StyledTodoButton onClick={() => deleteTodo(todo.id)}><FaTrashAlt/></StyledTodoButton>
            </div>
            
          
          </StyledTodoItem>
        ))}
      </StyledTodoList>
    </div>
  )
}

export default TodoList;