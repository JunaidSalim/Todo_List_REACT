import React from 'react'
import "./Todos.css"

export default function Todos({task,onDelete}) {
  return (
    <div className='text text-center m-4'>
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <button onClick={()=>{onDelete(task)}} className='btn btn-sm btn-danger m-2 p-2 '>Delete</button>
    <br/></div>
  )
}
