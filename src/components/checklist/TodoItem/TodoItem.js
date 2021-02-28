import { useState, useContext } from 'react';
import { updateTodoItem, deleteTodoItem } from "../../../adapters/checklistAdapter/checklistItem";
import TodoItemContext from "../../../contexts/TodoItemContext/TodoItemContext";

export let todoItemShared = {
    editMode: {},
    input:{},
    setInput:{}
  }

export default function TodoItem(){
    const [input, setInput]= useState();
    const [editMode, setEditMode]= useState(false);
    const [todoList, setTodoList, todoItem]= useContext(TodoItemContext.checklistContext);
    todoItemShared.setInput= setInput();

    function handleOnUpdate() {
        const newTodos = [...todoList];
        const todo = newTodos.find(todo => todo.id === todoItem.id);
        todo.complete = !todo.complete;
        updateTodoItem(todo);
        setTodoList(newTodos);
    }
    
    function handleOnEdit() {
        setInput(todoItem.description);
        todoItemShared.input= input;
        setEditMode(true);
        todoItemShared.editMode = editMode;
    }
    
    function handleOnInputBlur(e) {
        setEditMode(false);
        todoItemShared.editMode = editMode;
        const description = e.target.value;
        if (description === '') return;
        let updatedItem = todoItem;
        updatedItem.description = description;
        updateTodoItem(updatedItem);
    }
    
    function handleOnDelete(){
        const newTodos = todoList.filter(todo => todo.id !== todoItem.id);
        setTodoList(newTodos);
        deleteTodoItem(todoItem);
    }
}

