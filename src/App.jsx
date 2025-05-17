import { useState } from "react";

function Squre({ value, onSquareClick }) {
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="flex">
        <Squre value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Squre value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Squre value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Squre value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Squre value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Squre value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Squre value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Squre value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Squre value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;
