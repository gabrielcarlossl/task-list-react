import React, { useState } from "react";
import './App.css'
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4 as uuidv4} from 'uuid'



const App = () => {
  
  const [tasks, setTasks] = useState([
    {
    id:'1',
    title: 'Acordar 7h',
    completed: true,
    },
    {
      id:2,
      title: 'Ir para academia 7h:30min',
      completed: false
    }
    ,
    {
      id:3,
      title: 'Tomar banho',
      completed: false
    }
    ,
    {
      id:4,
      title: 'Tomar café da manhã 9h:30min',
      completed: false
    } 
])

const handleTaskClick = (taskId)=> {
  const newTasks = tasks.map(task => {
    if (task.id === taskId) return {...task, completed: !task.completed}
    return task
  })
  setTasks(newTasks)
}

const handleTaskAddition = (taskTitle) => {
  const newTasks = [
    ...tasks,
    {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]
  setTasks(newTasks)
}

  const handleTaskDeletion = (taskId) => {

    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  } 

  return (
    
    <div>
     
      <div className="container">
      <h1 className="titulo">Lista de Tarefas</h1>
        <AddTask handleTaskAddition={handleTaskAddition}></AddTask>
        <Tasks 
              tasks = {tasks}
              handleTaskClick = {handleTaskClick}
              handleTaskDeletion = {handleTaskDeletion}      
        ></Tasks>
      </div>
      
    </div>
    
  )
}

export default App;