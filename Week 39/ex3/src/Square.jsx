import React from "react";

const Square = ({ color, onClick }) => {
  const style = {
    width: "60px",
    height: "60px",
    backgroundColor: color,
    display: "inline-block",
    boxSizing: "border-box",
    border: "1px solid black",
    
  };

  return <div style={style} onClick={onClick}></div>;
};

export default Square;
