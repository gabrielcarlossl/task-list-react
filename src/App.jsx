import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid'
import axios from 'axios'

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks"; 
import Header from "./components/Header";


import './App.css' 

const App = () => {
  
  const [tasks, setTasks] = useState([
    {
    id:'1',
    title: 'Acordar',
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

  useEffect(() => {
    const fetchTasks = async()=> {
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10'
      )
      setTasks(data)
    }
     fetchTasks()
  },[])


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

      <div className="container">

        <Header></Header>

            <div>

              <AddTask 
                handleTaskAddition={handleTaskAddition}>
              </AddTask>

              <Tasks 
                tasks = {tasks}
                handleTaskClick = {handleTaskClick}
                handleTaskDeletion = {handleTaskDeletion}      
              >
              </Tasks>

            </div>
      
      </div> 
  )}

export default App;