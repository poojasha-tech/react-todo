import './App.css'
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import React, { useState, useEffect, use } from 'react';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import SignIn from './MyComponents/SignIn';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';






function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }



  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);

    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      completed: false
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]); // Spread operator to add new todo to the existing todos array
    console.log(todos);





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
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  // {
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
  //]);



  return (
    <>
      <Router>
        <Header title="MyTodoList" searchBar={false} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
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
