import React, { useState } from "react";
import "./App.css";

function App() {
  // Hardcoded dice sides
  const dice1Sides = ["A", "B", "C", "D", "E", "F"]; // Custom sides for Dice 1
  const dice2Sides = ["1", "2", "3", "4", "5", "6"]; // Custom sides for Dice 2
  const [result1, setResult1] = useState("-");
  const [result2, setResult2] = useState("-");
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    let rollingInterval;

    // Display random sides during the rolling animation
    rollingInterval = setInterval(() => {
      const randomSide1 =
        dice1Sides[Math.floor(Math.random() * dice1Sides.length)];
      const randomSide2 =
        dice2Sides[Math.floor(Math.random() * dice2Sides.length)];
      setResult1(randomSide1);
      setResult2(randomSide2);
    }, 100); // Change side every 100ms

    setTimeout(() => {
      clearInterval(rollingInterval); // Stop the random display
      const finalResult1 =
        dice1Sides[Math.floor(Math.random() * dice1Sides.length)];
      const finalResult2 =
        dice2Sides[Math.floor(Math.random() * dice2Sides.length)];
      setResult1(finalResult1);
      setResult2(finalResult2);
      setRolling(false);
    }, 1000); // Rolling duration
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Dice Simulator</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div
          className={`dice ${rolling ? "rolling" : ""}`}
          style={{
            width: "80px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            border: "2px solid black",
            borderRadius: "10px",
            backgroundColor: "#f0f0f0",
          }}
        >
          {result1}
        </div>
        <div
          className={`dice ${rolling ? "rolling" : ""}`}
          style={{
            width: "80px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            border: "2px solid black",
            borderRadius: "10px",
            backgroundColor: "#f0f0f0",
          }}
        >
          {result2}
        </div>
      </div>
      <button
        onClick={rollDice}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: rolling ? "not-allowed" : "pointer",
          backgroundColor: rolling ? "#ccc" : "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
        disabled={rolling} // Prevent rolling while already rolling
      >
        {rolling ? "Rolling..." : "Roll Dice"}
      </button>
    </div>
  );
}

export default App;
