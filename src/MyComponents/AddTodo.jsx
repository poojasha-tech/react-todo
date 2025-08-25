import React from 'react'
import { useState } from 'react';


const AddTodo = (props) => {
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("");


    const submit=(e)=>{
        e.preventDefault();// Prevents the default form submission behavior 
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else{
            props.addTodo(title, desc);
            
            setTitle("");
            setDesc("");
        }

    }




    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" name="title" autoComplete="on" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" name="desc" autoComplete="on" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                <button type="submit"  className="btn btn-sm btn-success">Add Your Todo</button>
            </form>

        </div>
    )
}

export default AddTodo
