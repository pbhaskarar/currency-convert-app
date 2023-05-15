import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PageFour = ({name}) => {
    const [currencyCodes, setCurrencyCodes] = useState([]);
    const [currencyCode, setCurrencyCode] = useState("");
  
    useEffect(() => {
      axios
        .get(
          "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
        )
        .then((res) => {
          setCurrencyCodes(res.data);
          // console.log(typeof res.data)
        });
    }, []);

    const currentCountryCode = [];
    for (const key in currencyCodes) {
      currentCountryCode.push({countryname: key, label: currencyCodes[key] });
    }
  
  return (
    <>
    <h1>{name}</h1>
    <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={currentCountryCode}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </div>
      <div>
        {currentCountryCode.map((item) => (
          <li>{item.countryname}</li>
        ))}
      </div>
    </>
  )
}

export default PageFour