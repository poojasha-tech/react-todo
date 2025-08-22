import './App.css'
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import React, { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';





function App() {

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    const myTodo={
      sno: todos.length + 1,
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



  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy some vegetables",
      completed: false
    },
    {
      sno: 2,
      title: "Go to the gym",
      desc: "You need to go to the gym to stay fit",
      completed: false
    },
    {
      sno: 3,
      title: "Go to the bank",
      desc: "You need to go to the bank to deposit money",
      completed: false
    }
  ]);



  return (
    <div>
      <AddTodo addTodo={addTodo}/>
      <Header title="MyTodoList" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  )
}

export default App
