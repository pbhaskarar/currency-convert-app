import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const user = {

    name: 'John Doe',

    email: 'john.doe@example.com',

    age: 25,

    dob: '08/02/1989',

    active: true
};
// console.log(typeof user)  object
// console.log(typeof user["name"]) string
// console.log( user["age"]) 
// console.log(user.age)


// // console.log("Bhaskar",user["name"])
const date = 2;
const occuuation = "gandhijayanti";
const statement = "oct 2nd gandhijayanti";
const expression = `oct ${date}nd ${occuuation}`;
// console.log("sai", expression);
// console.log("bhaskar", statement);


// // iterate over the user object

// for (const key in user) {

//     console.log(`${key}: ${user[key]}`);
// }

// const countryNames = []
// for (const key in problem ){
//     // countryNames.push({`lable:${key} place:"${problem[key]}"`});
//     countryNames.push({lable:key, value:problem[key]});
//     // console.log(`lable:${key}: place:"${problem[key]}"`)
//     console.log(countryNames)
//     console.log(Object[key])
// }



// step1:

// const country = [

//     {lable: "inr", place: "india"},
//     {lable: "aus", place: "astrulia"},
//     {lable: "us", place: "america"},
//     {lable: "uk", place: "unitedkingdom"},
// ]
const PageThree = ({ name }) => {
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

  const currentCountryCodes = [];
  for (const key in currencyCodes) {
    currentCountryCodes.push({ label: key, countryname: currencyCodes[key] });
    // console.log("bhaskar", typeof currencyCodes[key])
  }
//   console.log(Array.isArray (currentCountryCodes))

  

  //   const currentCountryCodes = Object.entries(currencyCodes).map(
  //     ([key, value]) => ({ label: key, countryname: value })
  //   );

//   console.log("currentCountryCodes", currentCountryCodes);
//   console.log("currentCountryCodeBhaskar", currentCountryCode);

  const handleChange = (e) => {
    setCurrencyCode(e.target.value);
  };

//   console.log(currencyCode)

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">country</InputLabel>
          <Select 
          value={currencyCode} 
          onChange={handleChange}>
            {currentCountryCodes.map((item) => (
              <MenuItem key={item.label} value={item.countryname}>
                {item.countryname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div> 
    </>
  );
};

export default PageThree;
