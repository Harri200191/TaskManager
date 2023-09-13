import React from 'react'
import Taskform from './Taskform'
import Task from './Task';
import { useState } from 'react';

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

  const createTask = async () => {

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