import React, { useState, useRef, useContext } from 'react';
import TodoList from '../TodoList/TodoList';
import TodoOverview from '../../../TodoOverview';
import { TodoPageContext } from "../../../contexts/TodoPageContext/TodoPageContext";

export const ThemeContext = React.createContext();

function TodoPageUI(props) {
  const {handleAddTodo, handleClearTodo, setTodos} = props;
  const [theme, setTheme] = useState('light');
  const todoNameRef = useRef();
  const { todoPageStates, setTodoPageStates } = useContext(TodoPageContext);
  const { todoList } = todoPageStates;

  function handleAddTodoUI() { 
    const name = todoNameRef.current.value
    handleAddTodo(name)
    todoNameRef.current.value = null
  }

  return (
    <>
      <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
        <TodoOverview data={'hello'} todo={todoList} />
      </ThemeContext.Provider>
      <TodoList todoList={todoList} setTodoList={setTodos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodoUI}>Add Todo</button>
      <button onClick={handleClearTodo}>Clear completed Todos</button>
      <div>{todoList.filter(todo=> !todo.complete).length} left to do</div>
    </>
  );
}

export default TodoPageUI;
