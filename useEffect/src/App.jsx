import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("gray");

  // empty ---------
  // useEffect(() => {
  //   console.log("Component renders");
  // });

  // empty array ---
  // useEffect(() => {
  //   console.log("Component renders");
  // }, []);

  // count as dependency -----

  useEffect(() => {
    document.title = `The current count is ${count}`;
    console.log("effect ran");
  }, [count]);

  return (
    <div style={{ backgroundColor: theme === "white" ? "black" : "white" }}>
      <h2>{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <button onClick={() => setTheme(theme === "white" ? "black" : "white")}>
        Toggle theme
      </button>
    </div>
  );
};

export default Counter;
