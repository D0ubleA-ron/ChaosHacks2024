import "./App.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import styled from "styled-components";

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
  const handleClick = () => {
    alert("YOU SUCK!");
  };
  return (
    <Grid container style={{ height: "100vh" }}>
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
            id="standard-basic"
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
    </Grid>
  );
}
