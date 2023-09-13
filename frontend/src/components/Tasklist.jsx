import React from 'react'
import Taskform from './Taskform'
import Task from './Task';

const Tasklist = () => {
  return (
    <div>
      <h2 >Name Selecter App</h2>
      <Taskform/>
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