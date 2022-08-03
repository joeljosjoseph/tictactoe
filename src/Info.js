import React from "react";
import "./info.css";

export default function Info({ turn }) {
  return (
    <div className="info">
      Current: {turn === 0 ? "Player 1 (X)" : "Player 2 (O)"}
    </div>
  );
}
