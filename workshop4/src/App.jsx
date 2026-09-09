import { useState } from "react";

import "./App.css";

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");
  return (
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      <input
        id="color-input"
        value={color}
        type="color"
        onChange={(e) => setColor(e.target.value)}
      ></input>
    </div>
  );
};

export default ColorPicker;
