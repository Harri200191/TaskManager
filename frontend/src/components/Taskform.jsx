import React from 'react'

const Taskform = ({createTask, name, handleInputChange}) => {
  return (
    <form className='task-form' onSubmit={createTask}>
      <input type='Text' placeholder='Add a name' value ={name} onChange={handleInputChange}/>
      <button type='submit'>Select</button>
    </form>
  )
}

export default Taskform;