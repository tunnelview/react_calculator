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

  return (
    <div className="wrapper">
      <Title />
      <div className="mainParent">
        <Display textToDisplay={textToDisplay} />
        <Buttons />
      </div>
    </div>
  );
};

export default App;
