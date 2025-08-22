import React from 'react'
import TodoItem from './TodoItem'



const Todos = (props) => {
  return (
    <div className='Container'>
      <h3 className='text-center my-3'>Todos List</h3>
      {/* now i want my todo to show here , and i will use map(same as we use loop)  */}
      

      
      {props.todos.length === 0 ? "No Todos to display" :
      props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })
      }

      



    </div>
  )
}

export default Todos
