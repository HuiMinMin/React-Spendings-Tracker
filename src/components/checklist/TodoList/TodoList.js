import React, { useEffect, useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import TodoItemController from '../TodoItem/TodoItemController';
import { TodoPageContext } from "../../../contexts/TodoPageContext/TodoPageContext";

export default function TodoList({ setTodoList}) {
    const { todoPageStates, setTodoPageStates } = useContext(TodoPageContext);

    useEffect(() => {
        setTodoPageStates({
          todoList: todoList
        })
      },[todoPageStates])
    
    const { todoList } = todoPageStates;
    console.log('todolist in todo list', todoList)

    return (
        todoList.map((todo) => {
            return (
            <ListItem>
                <TodoItemController key={todo.id} todoItem={todo} todoList={todoList} setTodoList={setTodoList}></TodoItemController>
            </ListItem>
        )})
    )
}
