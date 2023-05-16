import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import PageThree from './PageThree'
import PageFour from './PageFour'
import PageFive from './PageFive'
import PageSix from './PageSix'
import Sample from './Sample'
import WeatherApi from './WeatherApi'
import TodoApp from './TodoApp'
import CalculatorApp from './CalculatorApp'
import TodoManagement from './TodoManagement'


const Home = () => {
  return (
    <>
    <Container>
        <Typography variant="h3" textAlign='center'sx={{marginTop: '5rem', textDecorationLine: 'underline'}}>
            Currency converter app
        </Typography>
        <Grid container alignItems="center" sx={{marginTop: '3rem', background:'gray', border:'1px solidblack'}} >
        <Grid item xs={12} sm={6} md={6} sx={{padding: '3rem', borderRight: '1px solid White'}} >
          <Typography variant='h5'>
              Currency to Currency converter
          </Typography>
          <Button variant='contained' ><Link to='/PageOne'>open</Link></Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{padding: '3rem'}}>
          <Typography variant='h5'>
              Currency to all
          </Typography>
          <Button variant='contained' ><Link to='/PageTwo'>open</Link></Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{padding: '3rem'}}>
          <Typography variant='h5'>
              todo weather movie
          </Typography>
          <Button variant='contained' ><Link to='/todoApp'>todo</Link></Button>
          <Button variant='contained' ><Link to='/weatherApi'>weather</Link></Button>
          <Button variant='contained' ><Link to='/movieFilter'>movie</Link></Button>
        </Grid>
      </Grid>
      <TodoManagement name=' todo management' />
    </Container>
    </>
  )
}

export default Home