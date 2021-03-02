import React from 'react'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function DeleteButton({delFunc}) {
    return (
        <IconButton edge="end" aria-label="delete" onClick={delFunc}>
            <DeleteIcon />
        </IconButton>
    )
}
