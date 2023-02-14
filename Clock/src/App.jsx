import "./App.css";
import CountDown from "./Components/Countdown";
import DigitalClock from "./Components/Digitalclock";
import StopWatch from "./Components/Stopwatch";

function App() {
  return (
    <div className="App">
      <DigitalClock />
      <CountDown />
      <StopWatch />
    </div>
  );
}

export default App;
