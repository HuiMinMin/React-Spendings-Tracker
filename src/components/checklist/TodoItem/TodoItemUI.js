import React, { useState } from 'react';
import { Checkbox, ListItemSecondaryAction, IconButton, TextField } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import '../../../styles/TodoStyle/TodoItem.css';

export default function TodoItemUI({ todoItem, handleOnUpdate, handleOnInputBlur, handleOnDelete}) {
    
    const rowClass = todoItem.complete ? "flexDisplay strikeThrough":"flexDisplay";
    const descriptionClass = "topPadding widthVW";

    const [input, setInput]= useState();
    const [editMode, setEditMode]= useState(false);

    function handleOnEditUI() {
        setInput(todoItem.description);
        setEditMode(true);
    }

    function handleOnInputBlurUI(e) {
        setEditMode(false);
        handleOnInputBlur(e);
    }

    return (
        <div key={todoItem.id} className={rowClass}>
            <Checkbox
                edge="start"
                checked={todoItem.complete}
                tabIndex={-1}
                disableRipple
                onChange={handleOnUpdate}
            />
            <div className={descriptionClass}>
                {
                    !editMode ? 
                    <Typography className={"genericFontSize"} color="textSecondary" gutterBottom>
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
    
