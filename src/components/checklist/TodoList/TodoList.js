import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import ListItem from '@material-ui/core/ListItem';

export default function TodoList({todoList, setTodoList}) {

    return (
        todoList.map((todo) => {
            return (
            <ListItem>
                <TodoItem key={todo.id} todoItem={todo} todoList={todoList} setTodoList={setTodoList}></TodoItem>
            </ListItem>
        )})
    )
}
