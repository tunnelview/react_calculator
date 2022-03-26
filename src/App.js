// import logo from './logo.svg'; Don't need the react logo
import { useState } from "react";
import "./App.css";
import { Title } from "./components/Title";
import { Display } from "./components/Display";
import { Buttons } from "./Buttons";

const operators = ["+", "-", "*", "/"];

// create state and initial state is created
const App = () => {
  //create useState
  const [textToDisplay, setTexttoDisplay] = useState("");
  const [lastOperator, setLastOperator] = useState();

  const handleOnclick = (val) => {
    //
    if (operators.includes(val) || val === "=") {
      const lastOperatorIndex = lastOperator
        ? textToDisplay.lastIndexOf(lastOperator) + 1
        : 0;

      const firstNumberSet = textToDisplay.slice(0, lastOperatorIndex);
      const lastNumberSet = textToDisplay.slice(lastOperatorIndex);

      const str = firstNumberSet + parseFloat(lastNumberSet) + val;

      if (val === "=") {
        return onTotal(str);
      }

      setTexttoDisplay(str + val);

      setLastOperator(val);
      return;
    }

    //handle
    if (val === ".") {
      // if (lastOperator) {
      // Rewritten version of the code
      // 1. indext of last operator or 0
      const lastOperatorIndex = lastOperator
        ? textToDisplay.lastIndexOf(lastOperator) + 1
        : 0;
      const lastNumberSet = textToDisplay.slice(lastOperatorIndex);
      if (lastNumberSet.includes(".")) {
        return;
      }
      //   const lastOperatorIndex = textToDisplay.lastIndexOf(lastOperator);
      //   const lastNumberSet = textToDisplay.slice(lastOperator + 1); // last operator will give us the position of the operator and plus 1

      //   if (lastNumberSet.includes(".")) {
      //     return;
      //   }
      // } else {
      //   if (textToDisplay.includes(".")) {
      //     return;
      //   }
      // }
    }

    // if (val === "=") {
    //   return onTotal();
    // }
    if (val === "AC") {
      return setTexttoDisplay("");
    }
    if (val === "C") {
      const str = textToDisplay.slice(0, -1);
      return setTexttoDisplay(str);
    }

    if (operators.includes(val)) {
      const lastChar = textToDisplay.slice(-1);

      if (operators.includes(lastChar)) {
        const str = textToDisplay.slice(0, -1) + val;
        return setTexttoDisplay(str);
      }
    }

    setTexttoDisplay(textToDisplay + val);
  };

  const onTotal = (str) => {
    // let str = textToDisplay; We don't need this line as we already receiving argument in line 86
    const lastChar = str.slice(-1); // this is to get the last character

    if (operators.includes(lastChar)) {
      str = str.slice(0 - 1);
    }
    const ttl = eval(str);
    setTexttoDisplay(ttl.toString());
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
