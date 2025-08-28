import './App.css'
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import React, { useState, useEffect, use } from 'react';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import SignIn from './MyComponents/SignIn';
import SignUp from './MyComponents/SignUp';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';






function App() {
  const [todos, setTodos] = useState();
  useEffect(() => {
   getTodosFromDb().then(() => {} );
  }, []);

  async function getTodosFromDb() {
            const requestOptions = {
                method: "GET",
                redirect: "follow",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("AUTH_API"),
                }
            }

            const response = await fetch("http://localhost:3000/to-do", requestOptions);
            const data = await response.json();
            setTodos(data);
        }






  const addTodo = (id,title) => {


    const myTodo = {
      id: id,
      title: title,
      marked: false
    }
    setTodos([...todos, myTodo]); // Spread operator to add new todo to the existing todos array
 }





  const onDelete = (todo) => {
    console.log("I am onDelete function", todo)


    // delteing this way in react doesnt work 
    // let index=todos.indexOf(todo);
    // todos.splice(index, 1);


    setTodos(todos.filter((e) => {
      return e !== todo;

    }));

  }


  // we will pass empty array as initial state, and safe todos in local storage
  


  //   {
  //   sno: 1,
  //   title: "Go to the market",
  //   desc: "You need to go to the market to buy some vegetables",
  //   completed: false
  // },
  // {
  //   sno: 2,
  //   title: "Go to the gym",
  //   desc: "You need to go to the gym to stay fit",
  //   completed: false
  // },
  // {
  //   sno: 3,
  //   title: "Go to the bank",
  //   desc: "You need to go to the bank to deposit money",
  //   completed: false
  // }
  // ]);
  // useEffect(() => {
  //   let todos = localStorage.getItem("todos");
  //   if (todos) {
  //     setTodos(JSON.parse(todos));
  //   }


const [user, setUser] = useState(localStorage.getItem("user"));

  return (
    <>
      <Router>
        <Header title="MyTodoList" searchBar={false} />

        <Routes>
          <Route path="/signin" element={<SignIn />} />

          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              user ?(
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
              ): (<SignIn setUser={setUser} />)
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
