import React from 'react';
import Todos from "./Todos";


export default function Todo({tasks,onDelete}) {
  return (
    <>
      { tasks.length===0?<h3 className='text-center m-4 Nomessage'>No,Tasks to Show!</h3>:   
      tasks.map((tasks) => {
       
        return(<> <Todos task={tasks} key={tasks.no} onDelete={onDelete}/><hr/></>)})
      }
    </>
  )
}
