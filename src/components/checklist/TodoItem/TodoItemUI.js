import React, { useState } from 'react';
import { Checkbox, ListItemSecondaryAction, IconButton, TextField } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';

export default function TodoItemUI({ todoItem, handleOnUpdate, handleOnInputBlur, handleOnDelete}) {
    
    const [input, setInput]= useState();
    const [editMode, setEditMode]= useState(false);

    let styles = { 
        textDecoration: todoItem.complete ? 'line-through': 'none',
        display: 'flex'
    }

    function handleOnEditUI() {
        setInput(todoItem.description);
        setEditMode(true);
    }

    function handleOnInputBlurUI(e) {
        setEditMode(false);
        handleOnInputBlur(e);
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
            <div style={{paddingTop: '0.8em', width: '60vw'}}>
                {
                    !editMode ? 
                    <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
                        {todoItem.description}
                    </Typography> : 
                    <TextField 
                        id="outlined-basic" 
                        value={input}
                        variant="outlined" 
                        onChange={e => setInput(e.target.value)}
                        onBlur={(e) => handleOnInputBlurUI(e)}/>
                }
            </div>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={handleOnEditUI}>
                    <CreateIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={handleOnDelete}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </div>
    )
}
    
