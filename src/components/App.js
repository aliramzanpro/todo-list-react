import React from 'react'
import ToDoList from './ToDoList'
import NavBar from './NavBar'
import { Route, Switch} from 'react-router-dom'
import AddTask from './AddTask'
import initialData from '../initialData'
class App extends React.Component {

  state = {
    tasks: initialData
  }
  onToggleCompleted = (taskId) => {
    let taskToUpdate = this.state.tasks.find(t => t.id === taskId)
    taskToUpdate.completed = !taskToUpdate.completed
    this.setState(prevState => (
      prevState.tasks.map(task => {
        return task.id === taskId ? taskToUpdate : task
        })
      )
    )
  }
  
    render() {
      return (
        <section id="todo">
          <Switch>
            <Route path="/add-task" element={<AddTask/>}/>
            <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted = {this.onToggleCompleted}/>}/>
          </Switch>
          <NavBar/>
          
      </section>
      )
    }
  }
  export default App