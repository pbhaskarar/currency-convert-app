import axios from 'axios';
import React, { useState } from 'react'

const CurrenceAmount = () => {
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  const handleConvert = async () => {
    try {
      const response = await axios.get(
        'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json'
      );

      const eurToInr = response.data.eur.inr;
      const result = amount * eurToInr;
      setConvertedAmount(result);
      console.log(eurToInr)
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleConvert}>Convert</button>
      <p>Converted Amount: {convertedAmount}</p>
    </div>
  );
}

export default CurrenceAmount