import React, { useState, useContext } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ListItemSecondaryAction } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';

import { ThemeProvider } from '@material-ui/styles';

import DeleteButton from '../../shared/DeleteButton';
import InputTextbox  from '../../shared/InputTextbox';
import Navbar from '../../shared/Navbar';
import OverviewCard from '../../shared/OverviewCard';

import { TodoPageContext } from "../../../contexts/TodoPageContext/TodoPageContext";
import TodoList from '../TodoList/TodoList';

import '../../../styles/globalStyle.css';
// import { dark } from '@material-ui/core/styles/createPalette';

export const ThemeContext = React.createContext();

function TodoPageUI(props) {
  const { handleAddTodo, handleClearTodo, setTodos } = props;
  const { todoPageStates } = useContext(TodoPageContext);
  const { todoList } = todoPageStates;
  const [themeCheckbox, setThemeCheckbox] = useState(true);

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

  function handleAddTodoUI(e) { 
    handleAddTodo(e.target.value);
  }

  return (
    <>
      <ThemeProvider theme={themeCheckbox ? lightTheme: darkTheme}>
        <Card className="maxPageSize">
          <Navbar 
            NavbarTitle="To do" 
            ToggleButton={setThemeCheckbox}/>
          <div className="displayFlex">
            <OverviewCard 
              title="Tasks to complete" 
              number={todoList.filter(todo=> !todo.complete).length}/>
            <OverviewCard 
              title="Completed tasks" 
              number={todoList.filter(todo=> todo.complete).length}/>
          </div>
          <ListItem ContainerComponent="div">
            <InputTextbox 
              inputDisplay=""
              inputBlurFunc={handleAddTodoUI}
              fullWidth={true} />
            <ListItemSecondaryAction>
              <DeleteButton delFunc={handleClearTodo}/>
            </ListItemSecondaryAction>
          </ListItem>
            <TodoList todoList={todoList} setTodoList={setTodos}/>
        </Card>
      </ThemeProvider>
    </>
  );
}

export default TodoPageUI;
