import React from 'react';
import TodoItemUI from '../TodoItem/TodoItemUI';
import ListItem from '@material-ui/core/ListItem';

export let todoListShared = {
    todoItem: {}
}

export default function TodoList({todoList}) {

    return (
        todoList.map((todo) => {
            todoListShared.todoItem = todo;
            return (
            <ListItem>
                <TodoItemUI key={todo.id}></TodoItemUI>
            </ListItem>
            );})
    )
}
