// src/hooks/useVitals.js
import { useEffect, useState } from "react";

export default function useVitals() {
  const [heartRate, setHeartRate] = useState(72);
  const [bloodOxygen, setBloodOxygen] = useState(98);
  const [temperature, setTemperature] = useState(36.6);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate realistic changes
      setHeartRate(60 + Math.floor(Math.random() * 50)); // 60–110
      setBloodOxygen(94 + Math.random() * 6); // 94–100
      setTemperature(36 + Math.random() * 1.5); // 36.0–37.5
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return { heartRate, bloodOxygen, temperature };
}
