import "./App.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { useEffect, useState } from "react";

import { verifyCoordinates } from "../Maps/verifyCoordinates";
import useUserLocation from "../Maps/locationHelper.js";

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
  const [step, setStep] = useState("");
  const [saving, setSaving] = useState(false);
  const testLat = 49.189116;
  const testLong = -122.85047;
  const userLocation = useUserLocation();
  const { latitude, longitude } = userLocation || {};

  console.log(verifyCoordinates(latitude, longitude, testLat, testLong));

  const handleClick = async () => {
    const parsedLocation = location.split(" ").join("+");
    setSaving(true);
    try {
      const response = await fetch(
          `http://localhost:3001/search?endAddress=${parsedLocation}&latitude=${latitude}&longitude=${longitude}`
      ); // Point to your local server
      const data = await response.json();
      let steps = [];
      data.directions[0].trips.forEach((obj) => {
        obj.details.forEach((detail) => {
          steps.push({
            direction: detail.title,
            long: detail.gps_coordinates.longitude,
            lat: detail.gps_coordinates.latitude,
          });
        });
      });
      steps.push({ direction: "Woo Hoo, You did it!", long: 0, lat: 0 });
      setJsonData(steps);
      setStart(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleQuit = () => {
    alert("Loser");
  };

  useEffect(() => {
    if (jsonData) {
      console.log(jsonData);
    }
  }, [jsonData]);

  useEffect(() => {
    if (start) {
      setStep(jsonData[0]);
      let i = 1;
      const interval = setInterval(() => {
        setStep(jsonData[i]);
        i++;
        if (i === jsonData.length) {
          clearInterval(interval);
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [start, jsonData]);

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
              disabled={saving}
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
              <Typography color={"white"} variant="h3" textAlign={"center"}>
                {step.direction}
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
