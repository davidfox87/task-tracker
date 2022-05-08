import './index.css';
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false) // form will be dependent on this piece of state
  // state is now at the top level and we can pass it in to the component as a prop
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Call RV Road America',
      day: "May 8 at 14:00",
      reminder: true
    },
    {
      id: 2,
      text: 'Research walkie talkie',
      day: "May 8 at 15:00",
      reminder: true
    },
    {
      id: 3,
      text: 'Go swimming',
      day: "May 8 at 16:00",
      reminder: true
    },
    {
      id: 4,
      text: 'Put pedals on bike and attach cleats to shoes',
      day: "May 8 at 19:00",
      reminder: true
    }])

  const addTask = (task) => {
    // here we could use mongodb NoSQL, which would auto create id
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}

    setTasks([...tasks, newTask])
  }
  const deleteTask = (id) => {
    //console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //pass down to tasks as a prop and then task
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  //state gets passed down, actions get passed up
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/> }
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder}/>
        : ('No Tasks To Show')
      }
    </div>

  );
}

export default App;
