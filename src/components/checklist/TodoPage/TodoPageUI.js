import React, { useState, useRef, useEffect } from 'react';
import TodoList from '../TodoList/TodoList';
import TodoOverview from '../../../TodoOverview'

export const ThemeContext = React.createContext();

function TodoPageUI(props) {
  const {handleAddTodo, handleClearTodo, todos, setTodos} = props;
  const [theme, setTheme] = useState('light');
  const todoNameRef = useRef();

  function handleAddTodoUI() { 
    const name = todoNameRef.current.value
    handleAddTodo(name)
    todoNameRef.current.value = null
  }

  return (
    <>
      <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
        <TodoOverview data={'hello'} todo={todos} />
      </ThemeContext.Provider>
      <TodoList todoList={todos} setTodoList={setTodos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodoUI}>Add Todo</button>
      <button onClick={handleClearTodo}>Clear completed Todos</button>
      {/* <div>{todos.filter(todo=> !todo.complete).length} left to do</div> */}
    </>
  );
}

export default TodoPageUI;
