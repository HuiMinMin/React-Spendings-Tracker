import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getTodoItems, postTodoItem } from "../../../adapters/checklistAdapter/checklistAdapter";
import TodoPageUI from './TodoPageUI';
import { TodoPageContext } from "../../../contexts/TodoPageContext/TodoPageContext";

function TodoPageController() {
  const [todoList, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { todoPageStates, setTodoPageStates } = useContext(TodoPageContext);

  useEffect(() => {
    getTodoItems()
    .then(response => { 
      setTodos(response.data);
      setLoading(false);
    })
  },[])

  useEffect(() => {
    setTodoPageStates({
      todoList: todoList
    })
  },[todoList])

  function handleAddTodo(name) { 
    if (name === '') return
    const newTodoItem = {id: uuidv4(), description: name, complete: false}
    setTodos(prevTodos => {
      return [...prevTodos, newTodoItem]
    })
    postTodoItem(newTodoItem);
  }

  function handleClearTodo(){
    const newTodos = todoList.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  if (loading){
    return (
      <h1> Loading... </h1>
    )
  } else{
    return (
      <TodoPageUI handleAddTodo={handleAddTodo} handleClearTodo={handleClearTodo} setTodos={setTodos}></TodoPageUI>
    );
  }
}

export default TodoPageController;
