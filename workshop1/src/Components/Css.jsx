import React from "react";

function Css() {
  const CssFile = {
    color: "black",
    backgroundColor: "yellow",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "25px",
    cursor: "pointer",
  };
  return <button style={CssFile}>Click me</button>;
}

export default Css;
