import { useState } from "react";
import "./App.css";

export default function Calulate() {
  const [display, setDisplay] = useState("");

  // Number button
  const handleNumber = (number) => {
    setDisplay((prev) => prev + number);
  };

  // Operator button
  const handleOperator = (operator) => {
    setDisplay((prev) => prev + operator);
  };

  // Decimal
  const handleDecimal = () => {
    setDisplay((prev) => prev + ".");
  };

  // Calculate everything inside the input
  const handleCalculate = () => {
    try {
      // Change X into * because JavaScript uses *
      const expression = display.replace(/X/g, "*");

      const result = eval(expression);

      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  // Clear
  const handleClear = () => {
    setDisplay("");
  };

  // Delete last character
  const handleDelete = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <div className="Calculator">
        {/* Everything appears here */}
        <input
          className="display"
          type="text"
          value={display}
          readOnly
          placeholder="0"
        />

        <div className="box">
          <button onClick={() => handleNumber("0")}>0</button>
          <button onClick={() => handleNumber("1")}>1</button>
          <button onClick={() => handleNumber("2")}>2</button>
          <button onClick={() => handleNumber("3")}>3</button>
          <button onClick={() => handleNumber("4")}>4</button>
        </div>

        <div className="box">
          <button onClick={() => handleNumber("5")}>5</button>
          <button onClick={() => handleNumber("6")}>6</button>
          <button onClick={() => handleNumber("7")}>7</button>
          <button onClick={() => handleNumber("8")}>8</button>
          <button onClick={() => handleNumber("9")}>9</button>
        </div>

        <div className="box">
          <button onClick={() => handleOperator("+")}>+</button>
          <button onClick={() => handleOperator("-")}>-</button>
          <button onClick={() => handleOperator("X")}>X</button>
          <button onClick={() => handleOperator("/")}>/</button>
          <button onClick={handleCalculate}>=</button>
        </div>

        <div className="box">
          <button onClick={handleDecimal}>.</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleDelete}>D</button>
        </div>
      </div>
    </>
  );
}
