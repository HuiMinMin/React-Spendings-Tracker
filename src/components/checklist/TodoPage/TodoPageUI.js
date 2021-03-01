import React, { useState, useContext, useStyles } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ListItemSecondaryAction, IconButton, TextField } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';

import { ThemeProvider } from '@material-ui/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import MenuIcon from '@material-ui/icons/Menu';

import { TodoPageContext } from "../../../contexts/TodoPageContext/TodoPageContext";
import TodoList from '../TodoList/TodoList';

export const ThemeContext = React.createContext();

function TodoPageUI(props) {
  const {handleAddTodo, handleClearTodo, setTodos} = props;
  const { todoPageStates } = useContext(TodoPageContext);
  const { todoList } = todoPageStates;
  const [ input, setInput ]= useState();

  const [state, setState] = React.useState({
    checkedA: true
  });

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
    },
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    cardRoot: {
      minWidth: 150,
      width: '10vw',
      margin: '0.5em'
    },
    cardTitle: {
      fontSize: 14,
    },
    todoList: {
      flexGrow: 1
    },
    cardContent: {
      flex: 1
    },
    cardDiv: {
      display: 'flex'
    },
    page: {
      height: '100vh',
      width: '100 vw',
      margin: '0px !important'
    }
  }));

  const classes = useStyles();

  function handleAddTodoUI() { 
    if (input === undefined ) return
    handleAddTodo(input)
    setInput('')
  }

  return (
    <>
      <ThemeProvider theme={state.checkedA ? darkTheme:lightTheme}>
        <Card className={classes.page}>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  To do
                </Typography>
                <Switch
                  edge="end"
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  color="secondary"
                  inputProps={{ 'aria-label': 'style toggle' }}
                />
              </Toolbar>
            </AppBar>
          </div>
          <div className={classes.cardDiv}>
            <Card className={classes.cardRoot}>
              <CardContent className={classes.cardContent}>
                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                  Tasks to complete
                </Typography>
                <Typography variant="h5" component="h2">
                  {todoList.filter(todo=> !todo.complete).length}
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.cardRoot}>
              <CardContent className={classes.cardContent}>
                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                  Completed tasks
                </Typography>
                <Typography variant="h5" component="h2">
                  {todoList.filter(todo=> todo.complete).length}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <ListItem ContainerComponent="div">
            <TextField 
                fullWidth={true}
                id="outlined-basic" 
                value={input}
                variant="outlined" 
                onChange={e => setInput(e.target.value)}
                onBlur={() => handleAddTodoUI()}/>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Delete all completed tasks" onClick={handleClearTodo}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
              <TodoList todoList={todoList} setTodoList={setTodos}/>
        </Card>
      </ThemeProvider>
    </>
  );
}

export default TodoPageUI;
