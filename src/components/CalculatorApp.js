import { Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CalculatorApp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ marginTop: "5rem", textDecorationLine: "underline" }}
        >
          user data
        </Typography>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default CalculatorApp;
