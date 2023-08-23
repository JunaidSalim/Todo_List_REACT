import React, { useState } from 'react';


function Add({add}) {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if (!title || !description) {
            alert("Pleasen fill both!");
        }
        else{
        add(title,description);
       settitle("");
       setdescription("");}
    }

  return (
    <>
    <h3 className='mb-0 mt-5 ml-5'>Add a Task</h3>
    <form className=' pt-2 pl-5 pr-5 pb-3' onSubmit={submit} >
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Task Title</label>
    <input required type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" />
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input required type="text" value={description} onChange={(e)=>{setdescription(e.target.value)}} className="form-control" id="description"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Add</button>
</form></>
  )
}

export default Add;