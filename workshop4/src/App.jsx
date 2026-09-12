import { useState } from "react";

import "./App.css";

export const ColorPicker = () => {
  function handleButtonClick(event) {
    event.stopPropagation();
    console.log("Button");
  }
  const [color, setColor] = useState("#ffffff");
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("hey");
  return (
    <>
      <div id="color-picker-container" style={{ backgroundColor: color }}>
        <input
          id="color-input"
          value={color}
          type="color"
          onChange={(e) => setColor(e.target.value)}
        ></input>
      </div>
      {/* React Event bubbling */}
      {/* <div onClick={() => console.log("Parent")}>
        <button onClick={(handleButtonClick) => console.log("button")}>
          Click
        </button>
      </div> */}

      {/*  use of stopPropagation to stop bubbling  */}
      <div onClick={(e) => console.log("Parent")}>
        <button onClick={handleButtonClick}>Click</button>
      </div>

      <div>
        <input
          type="text"
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <h2>{input}</h2>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
      </div>
    </>
  );
};

export default ColorPicker;
