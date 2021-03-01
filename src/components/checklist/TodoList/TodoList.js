import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import TodoItemController from '../TodoItem/TodoItemController';

export default function TodoList({todoList, setTodoList}) {

    return (
        todoList.map((todo) => {
            return (
            <ListItem>
                <TodoItemController key={todo.id} todoItem={todo} todoList={todoList} setTodoList={setTodoList}></TodoItemController>
            </ListItem>
        )})
    )
}
