import React from 'react';
import { updateTodoItem, deleteTodoItem } from "../../../adapters/checklistAdapter/checklistItem";
import TodoItemUI from "./TodoItemUI";

export default function TodoItemController({ todoItem, todoList, setTodoList}) {
    
    function handleOnUpdate() {
        const newTodos = [...todoList]
        const todo = newTodos.find(todo => todo.id === todoItem.id)
        todo.complete = !todo.complete
        updateTodoItem(todo)
        setTodoList(newTodos)
    }

    function handleOnInputBlur(e) {
        const description = e.target.value;
        console.log('description', description)
        if (description === '') return
        let updatedItem = todoItem;
        updatedItem.description = description;
        updateTodoItem(updatedItem);
    }

    function handleOnDelete(){
        const newTodos = todoList.filter(todo => todo.id !== todoItem.id)
        setTodoList(newTodos)
        deleteTodoItem(todoItem)
    }
    
    return (
        <TodoItemUI 
            todoItem={todoItem} 
            handleOnUpdate={handleOnUpdate} 
            handleOnInputBlur={handleOnInputBlur} 
            handleOnDelete={handleOnDelete}>
        </TodoItemUI>
    )
}
    
