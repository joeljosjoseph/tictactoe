import React, { useEffect, useRef, useState } from "react";
import "./board.css";

export default function Board({
  reset,
  setReset,
  winner,
  setWinner,
  turn,
  setTurn,
}) {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const boardRef = useRef("");

  const play = (event, index) => {
    let player;
    if (data[index] === "") {
      turn === 0 ? (player = "X") : (player = "O");
      data[index] = player;
      event.target.innerText = player;
      turn === 0 ? setTurn(1) : setTurn(0);
    }
    if (data[index] !== "") {
      return;
    }
  };

  useEffect(() => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setTurn(0);
    setReset(false);

    const cells = boardRef.current.children;
    for (let i = 0; i < 9; i++) {
      cells[i].innerText = "";
    }
    setTimeout(() => {
      setWinner("");
    }, 5000);
  }, [reset, setReset, setWinner, winner, setTurn]);

  useEffect(() => {
    let corr = false;
    const checkRows = () => {
      for (let i = 0; i < 9; i += 3) {
        if (
          data[i] === data[i + 1] &&
          data[i] === data[i + 2] &&
          data[i] !== ""
        ) {
          corr = true;
        }
      }
      return corr;
    };

    const checkColumns = () => {
      for (let i = 0; i < 3; i++) {
        if (
          data[i] === data[i + 3] &&
          data[i] === data[i + 6] &&
          data[i] !== ""
        ) {
          corr = true;
        }
      }
      return corr;
    };

    const checkDiagonal = () => {
      for (let i = 0; i < 3; i += 2) {
        if (data[i] === data[4] && data[4] === data[8 - i] && data[i] !== "") {
          corr = true;
          console.log(data);
        }
      }
      return corr;
    };

    const checkTie = () => {
      let count = 0;
      data.forEach((cell) => {
        if (cell !== "") {
          count++;
        }
        return count === 9;
      });
    };

    if (checkRows() || checkColumns() || checkDiagonal()) {
      turn === 0 ? setWinner("Player 2 Wins") : setWinner("Player 1 Wins");
    } else if (checkTie()) {
      setWinner("Its a Tie");
    }
  });

  return (
    <div className="board" ref={boardRef}>
      <button
        className="board-button bb-1"
        onClick={(e) => play(e, 0)}
      ></button>
      <button
        className="board-button bb-2"
        onClick={(e) => play(e, 1)}
      ></button>
      <button
        className="board-button bb-3"
        onClick={(e) => play(e, 2)}
      ></button>
      <button
        className="board-button bb-4"
        onClick={(e) => play(e, 3)}
      ></button>
      <button
        className="board-button bb-5"
        onClick={(e) => play(e, 4)}
      ></button>
      <button
        className="board-button bb-6"
        onClick={(e) => play(e, 5)}
      ></button>
      <button
        className="board-button bb-7"
        onClick={(e) => play(e, 6)}
      ></button>
      <button
        className="board-button bb-8"
        onClick={(e) => play(e, 7)}
      ></button>
      <button
        className="board-button bb-9"
        onClick={(e) => play(e, 8)}
      ></button>
    </div>
  );
}
