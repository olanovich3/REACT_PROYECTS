import "./Stopwatch.css";
import { useState, useEffect } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);

  const [timerOn, setTimeron] = useState(false);
  console.log(timerOn);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="stopwatch">
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>

      <div className="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimeron(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimeron(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimeron(true)}>Resume</button>
        )}
      </div>
    </div>
  );
};

export default StopWatch;
