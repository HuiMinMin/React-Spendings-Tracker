import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core'

export default function InputTextbox({ inputDisplay, inputBlurFunc, fullWidth}) {
    const [input, setInput]= useState();

    useEffect(() => {
        setInput(inputDisplay);
    },[])

    function handleInputBlur(e){
        if (input === undefined || input === '') return;
        inputBlurFunc(e);
        if (inputDisplay === ''){
            setInput('');
        }
    }

    return (
        <TextField 
            id="outlined-basic" 
            fullWidth={fullWidth}
            value={input}
            variant="outlined" 
            onChange={e => setInput(e.target.value)}
            onBlur={(e) => handleInputBlur(e)}/>
    )
}
