import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const TodoApp = ({name}) => {
    const [data, setData] = useState("");
    const [todo, setTodo] = useState([])
    const dataChangeHandler = (e) =>{
        setData(e.target.value)
    }
    const dataSubmitHandler =(e) => {
        e.preventDefault()
        const newTodo = [...todo, data];
        setTodo(newTodo);
        console.log(todo)
    }
    const deleHandler = (indexValue) => {
        const newTodo = todo.filter((todos,index) => index !== indexValue)
        setTodo(newTodo)
    }

  return (
    <>
    <Container>
    <Typography variant="h3" textAlign='center'sx={{marginTop: '5rem', textDecorationLine: 'underline'}}>
            {name}
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
      onSubmit={dataSubmitHandler}
    >
      <TextField id="outlined-basic" label="EnterData" variant="outlined" name="data" value={data} onChange={dataChangeHandler} />
      <Button type='submit' variant='contained'> add Details</Button>
     
    </Box>
    {todo.map((item, index) => (
    <div key={index}>
        <h5>{item}<Button onClick={()=> deleHandler(index)}>delete</Button></h5>
    </div>
))}

<Button variant='contained'><Link to='/Home'>Home</Link></Button>
<Button variant='contained'><Link to='/movieFilter'>movie</Link></Button>
    <Button variant='contained' ><Link to='/weatherApi'>weather</Link></Button>
    </Container>
    </>
  )
}

export default TodoApp