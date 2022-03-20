// import logo from './logo.svg'; Don't need the react logo
import "./App.css";

function App() {
  return (
    <div class="wrapper">
      <h1>Hi Prank Calculator 😃 Try me, I will prank you</h1>

      <div class="mainParent">
        <div class="result" id="result">
          0.00
        </div>

        {/* <!-- buttons area --> */}
        <div class="items">
          <button class="clear">AC</button>
          <button class="clean">C</button>
          <button class="divide">/</button>
          <button class="multi">*</button>
          <button class="plus">+</button>
          <button class="minus">-</button>

          <button class="no-7">7</button>
          <button class="no-8">8</button>
          <button class="no-9">9</button>
          <button class="no-4">4</button>
          <button class="no-5">5</button>
          <button class="no-6">6</button>
          <button class="no-1">1</button>
          <button class="no-2">2</button>
          <button class="no-3">3</button>
          <button class="no-0">0</button>
          <button class="dot">.</button>
          <button class="ans">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
