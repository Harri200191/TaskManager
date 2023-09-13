import React from 'react'
import {FaCheckDouble, FaEdit, FaRegTrashAlt} from 'react-icons/fa'

const Task = () => {
  return (
    <div className='task'>
      <p>
        <b>1. </b>
        Name 1
      </p>
      <div className='task-icons'>
        <FaEdit />
        <FaCheckDouble />
        <FaRegTrashAlt />
      </div>
    </div>
  )
}

export default Task;