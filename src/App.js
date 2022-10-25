import React, { useState, useEffect } from 'react';

function App() {

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
      <input 
        type="text" 
        value={input} 
        onChange={
        (e) => setInput(e.target.value)
        }
      /> 
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;