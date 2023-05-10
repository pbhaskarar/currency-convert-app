import React from 'react';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <Container maxWidth="sm">
         <Stack  direction='row'>
            <Link to='/'>Home</Link>
            <Link to='/pageOne'>pageOne</Link>
            <Link to='/pageTwo'>pageTwo</Link>
         </Stack>
      </Container>
    </>
  )
}

export default Navbar