import React from 'react';
import checklistShared from "../../components/checklist/App";
import todoListShared from "../../components/checklist/TodoList/TodoList";
import todoItemShared from "../../components/checklist/TodoItem/TodoItem";

export default function TodoItemContext(){

    console.log("checklistShared", checklistShared);
    console.log("todoListShared", todoListShared);
    console.log("todoItemShared", todoItemShared);

    const checklist = {
        todoList: checklistShared.todoList,
        setTodoList:checklistShared.setTodoList,
        todoItem: todoListShared.todoItem,
        editMode: todoItemShared.editMode,
        input:todoItemShared.input,
        setInput:todoItemShared.setInput
    }

    const checklistContext = React.createContext(checklist);

    return null;
}