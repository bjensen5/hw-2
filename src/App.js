import { useState, useReducer, useEffect } from "react";

import CurrentUsersName from './CurrentUsersName';
import Userbar from "./user/Userbar";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import appReducer from "./reducers";
import React from "react";


function App() {

  const initialTodos = [
    {
      title: "New To-do 1",
      description: "This is the description for new task #1. Have fun accomplishing and being great!",
      dateCreated: "09/27/2021",
      complete: "",
      dateCompleted: ""
    },
    {
      title: "New To-do 2",
      description: "This is the description for new to-do #2. Have fun learning and being a really amazing person!",
      dateCreated: "09/28/2021",
      complete: "",
      dateCompleted: ""
    }
  ]

  // const [ user, dispatchUser ] = useReducer( userReducer, '')
  // const [ todos, dispatchTodos ] = useReducer( todoReducer, initialTodos)

  const [ state, dispatch ] = useReducer(appReducer, { user: "", todos: initialTodos })

  const { user, todos } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user}'s Todo List`
    } else {
      document.title = 'Todo List'
    }
  }, [user])

  return (
  <div>
    <Userbar user={user} dispatchUser={dispatch} />
    <hr/>
    { user && <CreateTodo user={user} dispatch={dispatch} /> }
    <TodoList todos={todos} />
  </div>
  )
}

export default App;
