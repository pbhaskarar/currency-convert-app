import {
  Button, FormControl, InputAdornment, Container, InputLabel, MenuItem,OutlinedInput, Select, Typography, TableContainer, Table, TableHead, TableRow, TableBody,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import getSymbolFromCurrency from 'currency-symbol-map';
import { styled } from '@mui/material/styles';


import TableCell, { tableCellClasses } from '@mui/material/TableCell';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const PageTwo = () => {
  const [currency, setCurrency] = useState({});
  const [fromcurrency, setFromCurrency] = useState("");
  const [amount, setAmount] = useState({});
  const [amounts, setAmounts] = useState(1)

  useEffect(() => {
    axios
      .get(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
      )
      .then((res) => setCurrency(res.data));
  }, []);

  useEffect(()=>{
    if(fromcurrency !== ""){
      
      axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromcurrency}.json`)
      .then((response) => {setAmount(response.data[fromcurrency]);
      // console.log(response)
      })
    }
  },[fromcurrency]);
  // console.log(amount)
  // console.log(fromcurrency)


    const handleFormCurrencyChange = (event) =>{
     setFromCurrency(event.target.value)
    }

    const handleAmountChange = (e) =>{
      setAmounts(e.target.value)
    }
  return (
    <>
      <Container>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ marginTop: "5rem", textDecorationLine: "underline" }}
        >
          Currency to all Country Currencys
        </Typography>
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">To Currency</InputLabel>
            <Select 
            value={fromcurrency} 
            onChange={handleFormCurrencyChange}>
              {Object.keys(currency).map((key) => (
                <MenuItem key={key} value={key}>
                  {currency[key]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth sx={{ m: 1, width: 300 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
           value={amounts}
           onChange={handleAmountChange}
            startAdornment={<InputAdornment position="start">{getSymbolFromCurrency(fromcurrency)}</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        </div>
        <div>
             <TableContainer >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
           
            <StyledTableCell align="right">code</StyledTableCell>
            <StyledTableCell align="right">description</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Object.keys(amount).map((key) => (
            <StyledTableRow>
             
              
              <StyledTableCell align="right">{fromcurrency}</StyledTableCell>
              <StyledTableCell align="right">{currency[key]}</StyledTableCell>
              <StyledTableCell align="right">{ amount[key]*amounts}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
             </div>
        <div style={{ marginTop: "2rem" }}>
          <Button variant="contained">
            <Link to="/Home">Home</Link>
          </Button>
          <Button variant="contained">
            <Link to="/PageOne">PageOne</Link>
          </Button>
        </div>
      </Container>
    </>
  );
};

export default PageTwo;
