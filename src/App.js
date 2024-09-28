import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Step />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState("Today");

  const today = new Date();
  today.setDate(today.getDate() + count);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  function stepReduce() {
    setStep((currStep) => currStep - 1);
  }

  function stepIncrease() {
    setStep((currStep) => currStep + 1);
  }

  function countReduce() {
    const newCount = count - step;
    setCount(newCount);
    dateCal(newCount);
  }

  function countIncrease() {
    const newCount = count + step;
    setCount(newCount);
    dateCal(newCount);
  }

  function dateCal(newCount) {
    if (newCount >= 1) {
      setDate(() => newCount + " days from now ");
    } else {
      setDate(() => Math.abs(newCount) + " days ago was ");
    }
  }

  return (
    <>
      <div className="top">
        <button onClick={stepReduce} className="button-reduce">
          -
        </button>
        Step: {step}
        <button onClick={stepIncrease} className="button-add">
          +
        </button>
      </div>
      <div className="top">
        <button onClick={countReduce} className="button-reduce">
          -
        </button>
        Count: {count}
        <button onClick={countIncrease} className="button-add">
          +
        </button>
      </div>
      <p className="text">
        {date} is {formattedDate}
      </p>
    </>
  );
}
