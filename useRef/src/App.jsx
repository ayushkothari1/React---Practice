import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} />

      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={() => (inputRef.current.style.border = "none")}>
        Focus
      </button>
      <button onClick={() => (inputRef.current.style.backgroundColor = "red")}>
        Focus
      </button>
    </>
  );
}

export default App;
