import React from 'react'
import { useState } from 'react';


const AddTodo = (props) => {
    const [title, setTitle] = React.useState("");


    const submit = async (e) => {
        e.preventDefault();// Prevents the default form submission behavior 
        if (!title) {
            alert("Title cannot be blank");
        }

        // else{
        //props.addTodo(title, desc);

        //     setTitle(""     );
        //     setDesc("");
        // }
        const requestOptions = {
            method: "POST",
            redirect: "follow",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("AUTH_API"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title })
        };
        const response = await fetch("http://localhost:3000/to-do", requestOptions);

        if (response.status != 201) {
            alert('cannot add todo');
        }
        else {
            const data = await response.json();
            const id = data.id;
            console.log(data);  
            props.addTodo(id,title);
            setTitle("");
        }
    }





    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" name="title" autoComplete="on" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Your Todo</button>
            </form>

        </div>
    )
}

export default AddTodo
