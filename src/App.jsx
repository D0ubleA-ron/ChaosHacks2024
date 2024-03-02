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
`;

export default function App() {
  const [directionData, setDirectionData] = useState({});
  const [location, setLocation] = useState("");
  const [start, setStart] = useState(false);
  const handleClick = () => {
    const parsedLocation = location.split(" ").join("+");
    alert("YOU SUCK!, " + parsedLocation + " is a terrible place to drive!");
    setStart(true);
  };
  const handleQuit = () => {
    alert("Loser");
  };
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
                next steps
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
