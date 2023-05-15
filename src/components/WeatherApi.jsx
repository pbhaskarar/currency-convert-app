import { Box, Button, Container, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const WeatherApi = ({name}) => {
    const[city, setCity] = useState()
    const [weather, setWeather] = useState([])

const changeHandler = (e)=>{
    setCity(e.target.value)
}
const submitHandler = (e)=>{
    e.preventDefault();
   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e1c3d24b91c38d5dfb175749aebb0b30`).then((res) => {
    const kelvin = res.data.main.temp;
    const celsius = kelvin - 273.15;
    setWeather("Temperature at " + city + "\n" + Math.round(celsius) + "°C");
    setCity('')
   }).catch((error)=>{
    console.log(error)
   })

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
      onSubmit={submitHandler}
    >
     
      <TextField label="Filled success" variant="filled" color="success" focused  name='city' value={city} onChange={changeHandler}/>
      <Button type='submit' variant='contained'sx={{margin: '1opx'}}>GetWeather</Button>
    </Box>
    <div className='bgImg'>
    <Typography variant="h3" textAlign='center'sx={{marginTop: '5rem', textDecorationLine: 'underline'}}>
           {weather}
    </Typography>
    </div>
    <Button variant='contained'><Link to='/Home'>Home</Link></Button>
    <Button variant='contained' ><Link to='/TodoApp'>todoApp</Link></Button>
          <Button variant='contained' ><Link to='/movieFilter'>movie</Link></Button>
    </Container>
    </>
  )
}

export default WeatherApi