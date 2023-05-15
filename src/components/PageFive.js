import { Autocomplete, Container, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'




const PageFive = ({name}) => {
    const [currencies, setCurrencies] = useState();
    useEffect(()=>{
        axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json').then((res) => setCurrencies(res.data))
        console.log(typeof currencies)
    },[]);

    const countryCode = [];
    for(const key in currencies){
        countryCode.push({label:currencies[key], currencyName:key })
    }
    
  return (
  <>
  <Container>
    <Typography variant='h3'> {name}</Typography>


   <div>
   <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={countryCode}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
   </div>

  </Container>

  </>
  )
}

export default PageFive