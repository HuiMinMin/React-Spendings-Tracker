import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import '../../styles/globalStyle.css';

export default function Navbar({NavbarTitle, ToggleButton}) {

    const [state, setState] = useState({
        checked: true
    });
    const [drawer, setDrawer] = React.useState({
        left: false
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    useEffect(() => {
        ToggleButton(state.checked);
    },[state.checked])


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        } 

        console.log(1111)
        setDrawer({ ...drawer, [anchor]: open });
    };

    return (
        <div className="flexGrow">
            <React.Fragment key={'left'}>
                <Drawer anchor={'left'} open={drawer['left']} onClose={toggleDrawer('left', false)}>
                    <MenuDrawer toggleDrawer={toggleDrawer}/>
                </Drawer>
            </React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" onClick={()=>{setDrawer({ ...drawer, ['left']: true });}} >
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
