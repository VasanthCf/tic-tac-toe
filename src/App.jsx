import { useState } from "react";
import Board from "./Board";

export default function Game() {
  // const [xTurn, nextTurn] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xTurn = currentMove % 2 === 0;
  const currentSquare = history[currentMove];

  function handlePlay(nextSquare) {
    const nextHistory = [...history.splice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);

    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    if (nextMove === 0) {
      setHistory([Array(9).fill(null)]);
    }
  }
  const move = history.map((arr, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = `Reset The Game #${move}`;
    }
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className={move === 0 ? "reset" : "history-btn"}
        >
          {" "}
          {description}
        </button>{" "}
      </li>
    );
  });

  return (
    <>
      <div className="game">
        <h1> Tic-Tac-Toe</h1>
        <div className="game-board">
          <Board xTurn={xTurn} square={currentSquare} onPlay={handlePlay} />

          <ol>{move}</ol>
        </div>
      </div>
      <div className="footer">Powered by VasanthCf &#169;2023</div>
    </>
  );
}
