import { useState } from "react";

import "./App.css";

export const ColorPicker = () => {
  function handleButtonClick(event) {
    event.stopPropagation();
    console.log("Button");
  }
  const [color, setColor] = useState("#ffffff");
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
      <div onClick={() => console.log("Parent")}>
        <button onClick={handleButtonClick}>Click</button>
      </div>
    </>
  );
};

export default ColorPicker;
