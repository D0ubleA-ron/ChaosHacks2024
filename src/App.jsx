import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [jsonData, setJsonData] = useState(null);

export default function App() {
  const [directionData, setDirectionData] = useState({});
  const [location, setLocation] = useState("");
  const [start, setStart] = useState(false);
  const handleClick = () => {
    fetchData();
    const parsedLocation = location.split(" ").join("+");
    alert(parsedLocation);
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
export default App;
