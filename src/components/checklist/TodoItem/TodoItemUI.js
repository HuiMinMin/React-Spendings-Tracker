import React, { useState } from 'react';
import { Checkbox, ListItemSecondaryAction } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import EditButton from '../../shared/EditButton';
import DeleteButton from '../../shared/DeleteButton';
import InputTextbox  from '../../shared/InputTextbox';
import '../../../styles/globalStyle.css';

export default function TodoItemUI({ todoItem, handleOnUpdate, handleOnInputBlur, handleOnDelete}) {
    
    const rowClass = todoItem.complete ? "displayFlex strikeThrough":"displayFlex";
    const descriptionClass = "topPadding widthVW";

    const [editMode, setEditMode]= useState(false);

    function handleOnEditUI() {
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
                    <Typography className={"genericFontSize"} color="textPrimary" gutterBottom>
                        {todoItem.description}
                    </Typography> : 
                    <InputTextbox 
                        inputDisplay={todoItem.description} 
                        inputBlurFunc={handleOnInputBlurUI} />
                }
            </div>
            <ListItemSecondaryAction>
                <EditButton editFunc={handleOnEditUI}/>
                <DeleteButton delFunc={handleOnDelete}/>
            </ListItemSecondaryAction>
        </div>
    )
}
    
