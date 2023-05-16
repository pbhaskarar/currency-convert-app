import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const TodoManagement = ({name}) => {
  const [data, setData] = useState("");
 const [todo, setTodo] = useState([]);

  const dataChangeHandler = (e) =>{
    setData(e.target.value)
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    // const newTodo = [...todo, data]
   setTodo((prev) => [...prev, data])
    setData('')
  }

  const deleteHandler = (indexValue) =>{
    const deleteTodo = todo.filter((todo, index)=> index !== indexValue)
    setTodo(deleteTodo);
  }

  return (
    <>
    <Container>
    <Typography variant="h3" textAlign='center'sx={{marginTop: '5rem', textDecorationLine: 'underline'}}>
            {`Hey please add the  ${name} details`}
        </Typography>
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1, width: '25ch' },
        mt: 2
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
     
    >
      <TextField id="outlined-basic" label="EnterData" variant="outlined" name="data" value={data} onChange={dataChangeHandler}  />
      <Button type='submit' variant='contained'> add Details</Button>
    </Box>
    {todo.map((todo, index) =>(
        <div key={index}>
            <h5>{todo}<Button onClick={()=>deleteHandler(index)}>Delete</Button></h5>
        </div>
    ))}
    <div>
    <Typography variant="h3" textAlign='center'sx={{marginTop: '5rem', textDecorationLine: 'underline'}}>
            {name}
        </Typography>
    </div>
    </Container>
    </>
  )
}

export default TodoManagement