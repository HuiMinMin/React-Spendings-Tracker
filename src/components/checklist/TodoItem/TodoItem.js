import React, { useState } from 'react';
import { Checkbox, ListItemSecondaryAction, IconButton, TextField } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { updateTodoItem, deleteTodoItem } from "../../../adapters/checklistAdapter/checklistItem";

export default function TodoItem({ todoItem, todoList, setTodoList}) {
    
    const [input, setInput]= useState();
    const [editMode, setEditMode]= useState(false);

    let styles = { 
        textDecoration: todoItem.complete ? 'line-through': 'none'
    }

    function handleOnUpdate() {
        const newTodos = [...todoList]
        const todo = newTodos.find(todo => todo.id === todoItem.id)
        todo.complete = !todo.complete
        updateTodoItem(todo)
        setTodoList(newTodos)
    }

    function handleOnEdit() {
        setInput(todoItem.description);
        setEditMode(true);
    }

    function handleOnInputBlur(e) {
        setEditMode(false);
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
        <div key={todoItem.id} style={styles}>
            <Checkbox
                edge="start"
                checked={todoItem.complete}
                tabIndex={-1}
                disableRipple
                onChange={handleOnUpdate}
            />
            {
                !editMode ? todoItem.description: 
                <TextField 
                    id="outlined-basic" 
                    value={input}
                    variant="outlined" 
                    onChange={e => setInput(e.target.value)}
                    onBlur={(e) => handleOnInputBlur(e)}/>
            }
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={handleOnEdit}>
                    <CreateIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={handleOnDelete}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </div>
    )
}
    
