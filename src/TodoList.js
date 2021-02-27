import React from 'react';
import TodoItem from './TodoItem';
import ListItem from '@material-ui/core/ListItem';

export default function TodoList({todoList, toggleTodo, updateTodo, deleteTodo}) {

    return (
        todoList.map((todo, index) => {
            return (
            <ListItem>
                <TodoItem key={todo.id} toggleTodo={toggleTodo} todoItem={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}></TodoItem>
            </ListItem>
        )})
    )
}
