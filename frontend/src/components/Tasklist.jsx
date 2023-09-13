import React, { useEffect } from 'react'
import Taskform from './Taskform'
import Task from './Task';
import { useState } from 'react';
import {toast} from 'react-toastify'
import axios from 'axios'
import { URL } from '../App';
import loadingimage from "../assets/loading.gif"

//http://localhost:5000/api/tasks

const Tasklist = () => {
  const [tasks, settasks] = useState([])
  const [completedtasks, setcompletedtasks] = useState([])
  const [isloading, setisloading] = useState(false)
  const [isediting, setisediting] = useState(false)
  const [taskID, settaskID] = useState("")

  const [formData, setformData] = useState({
    name: {},
    completed: false
  })

  const {name} = formData

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setformData({...formData, [name]: value})
  };

  const getTasks = async() => {
    setisloading(true)
    try{
      const {data} = await axios.get(`${URL}/api/tasks/`)
      settasks(data)
      setisloading(false)
    }
    catch(error){
      toast.error(error.message)
      setisloading(false)
    }
  };

  useEffect(() => {
    getTasks()
  }, [])

  const createTask = async (e) => {
    e.preventDefault()
    if (name === ""){
      return toast.error("Input can not be empty")
    }
    try{
      await axios.post(`${URL}/api/tasks/`, formData)
      //toast.success("Task added succesfully!")
      setformData({...formData, name: ""})
    }
    catch(error){
      toast.error(error.message)
    }
  }

  const deleteTask = async (id) => {
    try{
      await axios.delete(`${URL}/api/tasks/${id}`)
      //toast.success("Task deleted succesfully!")
      getTasks()
    }
    catch(error){
      toast.error(error.message)
    }
  }


  const getsingletask= async (task) => {
    setformData({
      name: task.name,
      completed: false
    })

    settaskID(task._id)
    setisediting(true)
  }


  const updateTask = async (e) => {
    e.preventDefault()
    if (name === ""){
      return toast.error("Input can not be empty")
    }

    try{
      await axios.put(`${URL}/api/tasks/${taskID}`, formData)
      setformData({...formData, name: ""})
      setisediting(false)
      //toast.success("Task Updated succesfully!")
      getTasks()
    }
    catch(error){
      toast.error(error.message)
    }
  }

  return (
    <div>
      <h2 >Name Selecter App</h2>
      <Taskform name={name} handleInputChange={handleInputChange} createTask={createTask} isediting ={isediting} updateTask= {updateTask} />
      <div className='--flex-between --pb'>
        <p>
          <b>Total Names: </b> 0
        </p>
        <p>
          <b>Selected People: </b> 0
        </p>
      </div>
      <hr />
      {
        isloading && (
          <div className="--flex-center">
            <img src = {loadingimage} alt='Loading...'></img>
          </div>
        )
      }
      {
        !isloading && tasks.length === 0 ? (
          <p className='--py'>No task added. Please add a task</p>
        ) : 
        (
          <>
            {tasks.map((task, index) => {
              return (
                <Task key={task._id} task = {task} index = {index} deleteTask ={deleteTask} updateTask= {updateTask} getsingletask ={getsingletask}/>
              )
            })}
          </>
        )
      }
    </div>
  )
}

export default Tasklist;