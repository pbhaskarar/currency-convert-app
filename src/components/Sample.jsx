import { Container } from '@mui/material'
import React, { useState } from 'react'

const Sample = () => {
    const [value, setValue] = useState('');
    const [data,setData] = useState([])

    const changeHandler = (e)=> {
        setValue(e.target.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        const newData = [...data, value];
        setData(newData)
    }

  return (
    <>
    <Container>
        <h1>sample Project</h1>
        <form onSubmit={submitHandler}>
            <input type='text' name='value' value={value} onChange={changeHandler} />
           <button type='submit'>submit</button>
        </form>
       {data.map((item) => 
        <div >
            <h6>{data}<button>delete</button></h6>
        </div>
        )}

    </Container>
    </>
  )
}

export default Sample