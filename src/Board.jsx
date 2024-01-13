import React from "react";
import Mysquare from "./MySquare";

import gameOver from "./assets/gameOver.wav";
import fluteClick from "./assets/fluteClick.wav";

export default function Board({ xTurn, square, onPlay }) {
  function handleClick(i) {
    if (square[i] || controlWinner(square)) return;
    let newSquare = square.slice();
    xTurn ? (newSquare[i] = "x") : (newSquare[i] = "o");
    onPlay(newSquare);
  }

  const winner = controlWinner(square);
  let status;

  if (winner) {
    status = `Winner is ${winner}🏆🎉🤩`;
    new Audio(gameOver).play();
  } else {
    status = `Next player = ${xTurn ? "x" : "o"}`;
    new Audio(fluteClick).play();
  }

  return (
    <>
      <div
        className="status"
        style={{ color: status === "Next player = x" ? "red" : "green" }}
      >
        {status}
      </div>
      <div className="board-container">
        {" "}
        <div className="board-row first-row">
          <Mysquare value={square[0]} squareClick={() => handleClick(0)} />
          <Mysquare value={square[1]} squareClick={() => handleClick(1)} />
          <Mysquare value={square[2]} squareClick={() => handleClick(2)} />
        </div>
        <div className="board-row  second-row">
          <Mysquare value={square[3]} squareClick={() => handleClick(3)} />
          <Mysquare value={square[4]} squareClick={() => handleClick(4)} />
          <Mysquare value={square[5]} squareClick={() => handleClick(5)} />
        </div>
        <div className="board-row  third-row">
          <Mysquare value={square[6]} squareClick={() => handleClick(6)} />
          <Mysquare value={square[7]} squareClick={() => handleClick(7)} />
          <Mysquare value={square[8]} squareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
function controlWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }

  return null;
}
