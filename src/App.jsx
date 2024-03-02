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
  const [page, setPage] = useState(0);
  const handleClick = () => {
    alert("YOU SUCK!");
    setPage(page + 1);
  };
  return (
    <Grid container style={{ height: "100vh" }}>
      {page < 1 ? (
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
                label="Where do you want to drive?"
                variant="standard"
              />
            </Box>
          </Grid>
        </>
      ) : (
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
      )}

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
    </Grid>
  );
}
