import React from 'react'
import Taskform from './Taskform'
import Task from './Task';
import { useState } from 'react';
import {toast} from 'react-toastify'
import axios from 'axios'
import { URL } from '../App';


//http://localhost:5000/api/tasks

const Tasklist = () => {
  const [formData, setformData] = useState({
    name: {},
    completed: false
  })

  const {name} = formData

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setformData({...formData, [name]: value})
  };

  const createTask = async (e) => {
    e.preventDefault()
    if (name === ""){
      return toast.error("Input can not be empty")
    }
    try{
      await axios.post(`${URL}/api/tasks/`, formData)
      toast.success("Task added succesfully!")
      setformData({...formData, name: ""})
    }
    catch(error){
      toast.error(error.message)
    }
  }

  return (
    <div>
      <h2 >Name Selecter App</h2>
      <Taskform name={name} handleInputChange={handleInputChange} createTask={createTask}/>
      <div className='--flex-between --pb'>
        <p>
          <b>Total Names: </b> 0
        </p>
        <p>
          <b>Selected People: </b> 0
        </p>
      </div>
      <hr />
      <Task/>
    </div>
  )
}

export default Tasklist;