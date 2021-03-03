import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getTodoItems, postTodoItem, deleteAllCompletedItem } from "../../../adapters/checklistAdapter/checklistAdapter";
import TodoPageUI from './TodoPageUI';
import { TodoPageContext } from "../../../contexts/TodoPageContext/TodoPageContext";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../../../styles/globalStyle.css';

function TodoPageController() {
  const [todoList, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setTodoPageStates } = useContext(TodoPageContext);

  useEffect(() => {
    getTodoItems()
    .then(response => { 
      setTodos(response.data);
      console.log(todoList);
      setLoading(false);
    })
  },[])

  useEffect(() => {
    setTodoPageStates({
      todoList: todoList
    })
  },[todoList, setTodoPageStates])

  function handleAddTodo(name) { 
    const newTodoItem = {id: uuidv4(), description: name, complete: false}
    setTodos(prevTodos => {
      return [...prevTodos, newTodoItem]
    })
    postTodoItem(newTodoItem);
  }

  function handleClearTodo(){
    const newTodos = todoList.filter(todo => !todo.complete);
    setTodos(newTodos);
    const toDelete = todoList.filter(todo => todo.complete);
    deleteAllCompletedItem(toDelete);
  }

  if (loading){
    return (
        <Card className="maxPageSize">
          <div className="loadingDiv">
            <div className="centralise">
              <CircularProgress/>
            </div>
            <Typography className={"titleFontSize"}
              color="textPrimary" gutterBottom>
                Loading
            </Typography>
          </div>
        </Card>
    )
  } else{
    return (
      <TodoPageUI 
        handleAddTodo={handleAddTodo} 
        handleClearTodo={handleClearTodo} 
        setTodos={setTodos} />
    );
  }
}

export default TodoPageController;
