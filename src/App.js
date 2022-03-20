// import logo from './logo.svg'; Don't need the react logo
import "./App.css";
import { Title } from "./components/Title";
import { Display } from "./components/Display";
import { Buttons } from "./Buttons";

function App() {
  return (
    <div className="wrapper">
      <Title />
      <div className="mainParent">
        <Display />

        <Buttons />
      </div>
    </div>
  );
}

export default App;
