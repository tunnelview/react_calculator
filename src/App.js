// import logo from './logo.svg'; Don't need the react logo
import { useState } from "react";
import "./App.css";
import { Title } from "./components/Title";
import { Display } from "./components/Display";
import { Buttons } from "./Buttons";

// create state and initial state is created
const App = () => {
  //create useState
  const [textToDisplay, setTexttoDisplay] = useState("0.00");

  const handleOnclick = (val) => {
    if (val === "=") {
      return onTotal();
    }
    if (val === "AC") {
      return setTexttoDisplay("");
    }
    if (val === "C") {
      const str = textToDisplay.slice(0, -1);
      return setTexttoDisplay(str);
    }

    setTexttoDisplay(textToDisplay + val);
  };

  const onTotal = () => {
    const str = textToDisplay;
    const ttl = eval(str);
    setTexttoDisplay(ttl);
  };

  return (
    <div className="wrapper">
      <Title />
      <div className="mainParent">
        <Display textToDisplay={textToDisplay} />

        <Buttons handleOnclick={handleOnclick} />
      </div>
    </div>
  );
};

export default App;
