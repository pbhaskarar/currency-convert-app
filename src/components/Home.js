import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


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
      </Grid>
    </Container>
    </>
  )
}

export default Home