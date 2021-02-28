import React, { useContext } from 'react';
import { Checkbox, ListItemSecondaryAction, IconButton, TextField } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import TodoItem from "./TodoItem";
import TodoItemContext  from "../../../contexts/TodoItemContext/TodoItemContext";

export default function TodoItemUI() {

    const [ todoItem, editMode, input, setInput]= useContext(TodoItemContext.checklistContext);

    let styles = { 
        textDecoration: todoItem.complete ? 'line-through': 'none'
    }
    
    return (
        <div key={todoItem.id} style={styles}>
            <Checkbox
                edge="start"
                checked={todoItem.complete}
                tabIndex={-1}
                disableRipple
                onChange={TodoItem.handleOnUpdate}
            />
            {
                !editMode ? todoItem.description: 
                <TextField 
                    id="outlined-basic" 
                    value={input}
                    variant="outlined" 
                    onChange={e => setInput(e.target.value)}
                    onBlur={(e) => TodoItem.handleOnInputBlur(e)}/>
            }
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={TodoItem.handleOnEdit}>
                    <CreateIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={TodoItem.handleOnDelete}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </div>
    )
}
    
