import { useState } from "react";

function useToggle(initialvalue = false) {
  const [value, setValue] = useState(initialvalue);

  function toggle() {
    setValue((value) => !value);
  }
  return [value, toggle];
}

export default function Menu() {
  const [isOpen, toggle] = useToggle();
  return (
    <>
      <button onClick={toggle}>{isOpen ? "Close" : "Open"}</button>
      {isOpen && <div>Menu contents</div>}
    </>
  );
}
