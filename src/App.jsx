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
  const handleClick = async () => {
    const parsedLocation = location.split(" ").join("+");
    try {
      const response = await fetch(
        `http://localhost:3001/search?endAddress=${parsedLocation}`
      ); // Point to your local server
      const data = await response.json();
      data.directions[0].trips.forEach((obj) => {
        obj.details.forEach((detail) => {
          console.log(detail.title, detail.gps_coordinates);
        });
      });
      setJsonData(data);
      setStart(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
