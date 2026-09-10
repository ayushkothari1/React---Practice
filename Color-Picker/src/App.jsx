import { useState } from "react";
import "./App.css";

function ColorPicker() {
  const [color, setColor] = useState("#6C63FF");

  return (
    <main className="picker">
      <div className="card-box">
        <div className="colorEl" style={{ backgroundColor: color }}></div>

        <div className="content">
          <p className="head">COLOR STUDIO</p>

          <h1>Choose your Color</h1>

          <p className="para">Pick a color and see the the change.</p>

          <div className="colorValue">
            <span
              className="color-dot"
              style={{ backgroundColor: color }}
            ></span>

            <span>{color.toUpperCase()}</span>
          </div>

          <label htmlFor="input">Select a new color</label>

          <input
            id="input"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </main>
  );
}

export default ColorPicker;
