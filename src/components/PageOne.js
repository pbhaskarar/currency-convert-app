import { Button, Container, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import getSymbolFromCurrency from 'currency-symbol-map'

const PageOne = () => {
    const[currencyCodes, setCurrencyCodes]= useState([]);
    const [fromCurrencyCode, setFromCurrencyCode]= useState('');
    const [toCurrencyCode, setToCurrencyCode] = useState('');
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0)


    useEffect(() => {
        axios
          .get(
            "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
          )
          .then((response) => {
            setCurrencyCodes(response.data);
            // console.log(typeof response.data)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
      // console.log("bhaskar", currencyCodes)
    // console.log("fromCurrencyCode",fromCurrencyCode)
    useEffect(() =>{
        if(fromCurrencyCode && toCurrencyCode ){
            axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrencyCode}/${toCurrencyCode}.json`)
            .then((response) => {
                setAmount(response.data[toCurrencyCode])
                // console.log(response)
            }).catch((error) =>{
                console.log(error)
            })
        }
    }, [fromCurrencyCode, toCurrencyCode])
    
      const handleFromCurrencyChange = (e) => {
        setFromCurrencyCode(e.target.value);
        // console.log("bhaskar", e)
    };
    

    const handleToCurrencyChange = (e) => {
        setToCurrencyCode(e.target.value);
    };

     const handleAmountChange = (e) => {
     setConvertedAmount(e.target.value)
     }
console.log("function",)
  return (
    <>
    <Container>
    <Typography variant="h5" textAlign='center'sx={{marginTop: '5rem', textDecorationLine: 'underline'}}>
        Changing Currency to Indian Rupees
    </Typography>
    <div>
    <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">FromCurrency</InputLabel>
        <Select
          value={fromCurrencyCode}
          onChange={handleFromCurrencyChange}
        
        >
          {Object.keys(currencyCodes).map((key) => (
            <MenuItem
              key={key}
              value={key}
            >
              {currencyCodes[key]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </div>

    <div>
    <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">To Currency</InputLabel>
        <Select
          value={toCurrencyCode}
          onChange={handleToCurrencyChange}
        
        >
          {Object.keys(currencyCodes).map((key) => (
            <MenuItem
              key={key}
              value={key}
             
            >
              {currencyCodes[key]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </div>
    <div>
    <FormControl fullWidth sx={{ m: 1, width: 300 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
           value={convertedAmount}
           onChange={handleAmountChange}
            startAdornment={<InputAdornment position="start">{ getSymbolFromCurrency(fromCurrencyCode)}</InputAdornment>}
            label="Amount"
          />
        </FormControl>
    </div>
    <div>
     <h1>{toCurrencyCode}</h1>
      <h3>{amount * convertedAmount}</h3>
    </div>

<div>

</div>

    
   <div style={{marginTop:'2rem'}}>
   <Button variant='contained'><Link to='/Home'>Home</Link></Button>
   <Button variant='contained'><Link to='/PageTwo'>PageTwo</Link></Button>
   </div>3
    </Container>
    </>
  )
}

export default PageOne