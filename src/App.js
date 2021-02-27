import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import TodoOverview from './TodoOverview'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    if (todos) getTodos();
  },[])

  // useEffect(()=>{
    
  // },[todos])

  function getTodos() {
    axios.get("/getTodoItems",
    )
    .then(response => {
      setTodos(response.data);
    })
  }

  function postTodo(newTodoItem){
    axios.post("/postTodoItem", 
    {newTodoItem})
    .then(response => {console.log(response)}
    );
  }

  function updateTodo(newTodoItem){
    axios.put("/updateTodoItem", 
    {newTodoItem})
    .then(response => {console.log(response)}
    );
    console.log('Update single item')
  }

  function deleteTodo(itemToDelete){
    const newTodos = todos.filter(todo => todo.id != itemToDelete.id)
    setTodos(newTodos)
    axios.delete("/deleteTodoItems",
    {data: itemToDelete })
    .then(response => {console.log(response)}
    );
    console.log('Delete one item')
  }

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    updateTodo(todo)
    setTodos(newTodos)
  }

  function handleAddTodo(e) { 
    const name = todoNameRef.current.value
    console.log(name)
    if (name === '') return
    const newTodoItem = {id: uuidv4(), description: name, complete: false}
    setTodos(prevTodos => {
      return [...prevTodos, newTodoItem]
    })
    console.log(newTodoItem)
    postTodo(newTodoItem);
    todoNameRef.current.value = null
  }

  function handleClearTodo(e){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoOverview data={'hello'} todo={todos} />
      <TodoList todoList={todos} toggleTodo={toggleTodo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodo}>Clear completed Todos</button>
      <div>{todos.filter(todo=> !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
