import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid,TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MovieFilter = () => {
    const [query, setQuery] = useState("");
    const[movie, setMovie] = useState([]);


    const handleInputChange = (e) =>{
        setQuery(e.target.value)
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        axios.get(`https://www.omdbapi.com/?s=${query}&apikey=263d22d8`).then((res) =>{
            // setMovie(res.data.Search)
            // console.log(res.data.Search);
            if(res.data.Response === "False"){
                alert(res.data.error)
            }else{
                setMovie(res.data.Search)
            }
        })
    }
  return (
   <>
   <Container>

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
     onSubmit= {handleFormSubmit}
    >
      <TextField id="outlined-basic" label="query" variant="outlined" name='query' value={query} onChange={handleInputChange} />
     <Button type='submit'>Search</Button>
    </Box>
    <Grid container spacing={2}>
     {movie && movie.map((item) =>(
          <Grid item xs={12} sm={6} md={4} key={item.imdbID}>
            <Card sx={{ maxWidth: 345 }}>
         <CardActionArea>
           <CardMedia
             component="img"
             height="140"
             image={item.Poster}
             alt="movie"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               {item.Title}
             </Typography>
             <Typography variant="body2" color="text.secondary">
               {item.Year}
             </Typography>
           </CardContent>
         </CardActionArea>
       </Card>
       </Grid>
     ))}
   </Grid>
   <Button variant='contained'><Link to='/Home'>Home</Link></Button>
   <Button variant='contained'><Link to='/TodoApp'>todo</Link></Button>
    <Button variant='contained' ><Link to='/weatherApi'>weather</Link></Button>
   </Container>
   </>
  )
}

export default MovieFilter