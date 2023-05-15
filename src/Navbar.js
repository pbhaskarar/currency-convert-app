import React from 'react';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <Container maxWidth="sm" sx={{justifyContent: 'space-between'}} >
          <Stack  direction='row' gap={3}>
            <Link to='/'>Home</Link>
            <Link to='/pageOne'>pageOne</Link>
            <Link to='/pageTwo'>pageTwo</Link>
            <Link to='/todoApp'>todo</Link>
            <Link to='/weatherApi'>weather</Link>
            <Link to='/movieFilter'>MovieFilter</Link>
          </Stack>
      </Container>
    </>
  )
}

export default Navbar