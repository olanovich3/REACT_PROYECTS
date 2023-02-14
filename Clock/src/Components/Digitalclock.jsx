import "./DigitalClock.css";

import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [clockSate, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="digital-clock">
      <h2>{clockSate}</h2>
    </div>
  );
};

export default DigitalClock;
