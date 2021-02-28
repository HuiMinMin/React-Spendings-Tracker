import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList/TodoList';
import TodoOverview from '../../TodoOverview'
import { v4 as uuidv4 } from 'uuid';
import { getTodoItems, postTodoItem } from "../../adapters/checklistAdapter/checklistAdapter";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    getTodoItems()
    .then(response => { setTodos(response.data)})
  },[])

  function handleAddTodo() { 
    const name = todoNameRef.current.value
    if (name === '') return
    const newTodoItem = {id: uuidv4(), description: name, complete: false}
    setTodos(prevTodos => {
      return [...prevTodos, newTodoItem]
    })
    postTodoItem(newTodoItem);
    todoNameRef.current.value = null
  }

  function handleClearTodo(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      {/* <TodoOverview data={'hello'} todo={todos} /> */}
      <TodoList todoList={todos} setTodoList={setTodos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodo}>Clear completed Todos</button>
      <div>{todos.filter(todo=> !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
