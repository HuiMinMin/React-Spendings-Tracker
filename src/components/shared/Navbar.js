import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import '../../styles/globalStyle.css';

export default function Navbar({NavbarTitle, ToggleButton}) {

    const [state, setState] = useState({
        checked: true
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    useEffect(() => {
        ToggleButton(state.checked);
    },[state.checked])

    return (
        <div className="flexGrow">
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className="flexGrow">
                    {NavbarTitle}
                </Typography>
                <Switch
                    edge="end"
                    checked={state.checked}
                    onChange={handleChange}
                    name="checked"
                    color="secondary"
                    inputProps={{ 'aria-label': 'theme toggle' }}
                />
                </Toolbar>
            </AppBar>
        </div>
    )
}
