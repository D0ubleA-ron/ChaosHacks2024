import "./App.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";

const StyledTextField = styled(TextField)`
  .MuiInput-underline:before {
    border-bottom: 1px solid white;
  }
  .MuiInput-underline:hover:before {
    border-bottom: 2px solid white;
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid white;
  }
  .MuiInputBase-input {
    color: white;
  }
  .MuiFormLabel-root {
    color: white;
  }
  width: 70%;
  max-width: 500px;
`;

export default function App() {
  const [jsonData, setJsonData] = useState(null);
  const [location, setLocation] = useState("");
  const [start, setStart] = useState(false);
  const handleClick = () => {
    const parsedLocation = location.split(" ").join("+");
    // 6efdec7c0736a882e98400a1275087e1626d551f335907b5b903ca83e557bfc6
    console.log(
      `https://serpapi.com/search.json?engine=google_maps_directions&start_coords=49.182161,-122.868295&end_addr=${parsedLocation}&hl=en&api_key=NULL`
    );
    setStart(true);
  };
  const handleQuit = () => {
    alert("Loser");
  };
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3001/search"); // Point to your local server
      const data = await response.json();
      console.log(data);
      setJsonData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <Grid container style={{ height: "100vh" }}>
      {start < 1 ? (
        <>
          <Grid item xs={12} height={"10%"} textAlign={"center"}>
            <Typography color={"white"} variant="h3" marginTop={5}>
              Moogle Gaps
            </Typography>
          </Grid>
          <Grid item xs={12} height={"80%"}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <StyledTextField
                onChange={(e) => setLocation(e.target.value)}
                label="Where do you want to drive?"
                variant="standard"
              />
            </Box>
          </Grid>
          <Grid item xs={12} height={"10%"} textAlign={"center"}>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              onClick={handleClick}
            >
              Lets-a-go
            </Button>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} height={"90%"}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Typography color={"white"} variant="h3">
                Next Steps
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} height={"10%"} textAlign={"center"}>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              onClick={handleQuit}
            >
              Give Up
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
}
