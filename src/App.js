import Todos from "./Todos";
import Userbar from "./user/Userbar";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";


function App() {
  const todos = [
    {
      title: "New To-do 1",
      description: "This is the description for new task #1. Have fun accomplishing and being great!",
      dateCreated: "09/27/2021",
      complete: "incomplete",
      dateCompleted: ""
    },
    {
      title: "New To-do 2",
      description: "This is the description for new to-do #2. Have fun learning and being a really amazing person!",
      dateCreated: "09/28/2021",
      complete: "incomplete",
      dateCompleted: ""
    }
  ]
  return (
  <div>
    <Userbar />
    <hr/>
    <Todos />
    <br />
    <CreateTodo name="New Todos"/>
    <TodoList todos={todos} />
  </div>
  )
}

export default App;
