import React from 'react';
import { IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

export default function EditButton({editFunc}) {
    return (
        <IconButton edge="end" aria-label="edit" onClick={editFunc}>
            <CreateIcon />
        </IconButton>
    )
}
