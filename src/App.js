import { useState } from "react";
import "./App.css";
import Board from "./Board";
import Info from "./Info";

function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");
  const [turn, setTurn] = useState(0);

  const handleClick = () => {
    setReset(true);
  };
  return (
    <div className="app">
      <div className={`winner ${winner !== "" ? "" : "shrink"}`}>{winner}</div>
      {winner === "" ? <Info turn={turn} /> : ""}
      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
        turn={turn}
        setTurn={setTurn}
      />
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
