import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  
  const initialBoard = [];
  for (let row = 0; row < 8; row++) {
    const rowColors = [];
    for (let col = 0; col < 8; col++) {
      if ((row + col) % 2 === 0) {
        rowColors.push("white"); 
      } else {
        rowColors.push("black"); 
      }
    }
    initialBoard.push(rowColors);
  }

  const [board, setBoard] = useState(initialBoard);

  // This part I learned from AI (ChatGPT)
  const toggleSquare = (row, col) => {
    const newBoard = [...board]; 
    const newRow = [...newBoard[row]]; 
    newRow[col] = newRow[col] === "white" ? "black" : "white"; 
    newBoard[row] = newRow;
    setBoard(newBoard);
  };

  return (
    <div>
      {board.map((row, rIndex) => (
        // This part I learned from AI (ChatGPT)
        <div key={rIndex} style={{ display: "flex" }}> 
          {row.map((color, cIndex) => (
            <Square
              key={cIndex}
              color={color}
              onClick={() => toggleSquare(rIndex, cIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
