import React, { useState, useRef } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';

export default function TodoItem({ todoItem, toggleTodo, updateTodo, deleteTodo}) {
    let styles = { 
        textDecoration: todoItem.complete ? 'line-through': 'none'
    }

    const [input, setInput]= useState();

    const [editMode, setEditMode]= useState(false);

    function handleTodoClick() {
        toggleTodo(todoItem.id)
    }

    function handleOnEdit() {
        setInput(todoItem.description);
        setEditMode(true);
    }

    function handleInputBlur(e) {
        setEditMode(false);
        const description = e.target.value;
        console.log('description', description)
        if (description === '') return
        let updatedItem = todoItem;
        updatedItem.description = description;
        updateTodo(updatedItem);
    }

    function handleDelete(){
        deleteTodo(todoItem);
    }
    
    return (
        <div key={todoItem.id} style={styles}>
            <Checkbox
                edge="start"
                checked={todoItem.complete}
                tabIndex={-1}
                disableRipple
                onChange={handleTodoClick}
            />
            {
                !editMode ? todoItem.description: 
                <TextField 
                    id="outlined-basic" 
                    value={input}
                    variant="outlined" 
                    onChange={e => setInput(e.target.value)}
                    onBlur={(e) => handleInputBlur(e)}/>
            }
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={handleOnEdit}>
                    <CreateIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </div>
    )
}
    
