import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import TodoItemController from '../TodoItem/TodoItemController';
import { TodoPageContext } from "../../../contexts/TodoPageContext/TodoPageContext";

export default function TodoList({ setTodoList}) {
    const { todoPageStates } = useContext(TodoPageContext);
    const { todoList } = todoPageStates;

    return (
        todoList.map((todo) => {
            return (
            <ListItem>
                <TodoItemController key={todo.id} todoItem={todo} setTodoList={setTodoList}></TodoItemController>
            </ListItem>
        )})
    )
}
