import { Box, Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'

const PageSix = ({name}) => {
    const [data, setData] = useState('');
    const [todo, setTodo] = useState([])
const submitHandler = (e)=>{
   e.preventDefault()
  const  newTodo = [...todo, data];
  setTodo(newTodo)
  setData('')
}
const deleteHandler = (indexValue) =>{
    const newTodo = todo.filter((todo, index) => index !== indexValue )
    setTodo(newTodo)
}
   
  return (
    <>
    <Container>
     <h4>{name}</h4>  
     <div>
     <form onSubmit={submitHandler}>
        <input type='text' name='data' value={data} onChange={(e)=>setData(e.target.value)} />
        <input type='submit' />
     </form>
    <div>
        {todo.map((todo,index) => <div key={index}>
            <h5>{todo}<button onClick={()=>deleteHandler(index)}>Delete</button></h5>
        </div>)}
    </div>

    </div> 
    </Container>
    </>
  )
}

export default PageSix