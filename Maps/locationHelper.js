// locationHelper.js
import { useState, useEffect } from "react";

export default function useUserLocation() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser");
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return userLocation;
}