import React from "react";

const btns = [
  {
    label: "AC",
    clsName: "clear",
  },
  {
    label: "C",
    clsName: "clear",
  },
  {
    label: "/",
    clsName: "backslash",
  },
  {
    label: "*",
    clsName: "Star",
  },
  {
    label: "7",
    clsName: "seven",
  },
  {
    label: "8",
    clsName: "eight",
  },
  {
    label: "9",
    clsName: "nine",
  },
  {
    label: "4",
    clsName: "four",
  },
  {
    label: "5",
    clsName: "five",
  },
  { label: "6", clsName: "six" },

  {
    label: "1",
    clsName: "one",
  },

  {
    label: "2",
    clsName: "two",
  },
  {
    label: "3",
    clsName: "three",
  },
  {
    label: ".",
    clsName: "dot",
  },
  {
    label: "0",
    clsName: "zero",
  },
  {
    label: "=",
    clsName: "ans",
  },
];

export const Buttons = () => {
  return (
    <div className="items">
      {btns.map((btn, i) => (
        <button className={btn.clsName}>{btn.label}</button>
      ))}
    </div>
    //     <div class="mainParent">
    //       {/* <!-- buttons area --> */}
    //       <div class="items">
    //         <button class="clear">AC</button>
    //         <button class="clean">C</button>
    //         <button class="divide">/</button>
    //         <button class="multi">*</button>
    //         <button class="plus">+</button>
    //         <button class="minus">-</button>

    //         <button class="no-7">7</button>
    //         <button class="no-8">8</button>
    //         <button class="no-9">9</button>
    //         <button class="no-4">4</button>
    //         <button class="no-5">5</button>
    //         <button class="no-6">6</button>
    //         <button class="no-1">1</button>
    //         <button class="no-2">2</button>
    //         <button class="no-3">3</button>
    //         <button class="no-0">0</button>
    //         <button class="dot">.</button>
    //         <button class="ans">=</button>
    //       </div>
    //     </div>
  );
};
