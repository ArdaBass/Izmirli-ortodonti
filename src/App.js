import React, { useState } from "react";
import "./App.css";

function App() {
  // Hardcoded dice sides
  const dice1Sides = [
    "Missionary",
    "Doggy Style",
    "Cowgirl",
    "Reverse Cowgirl",
    "Spooning",
    "Standing",
  ]; // Custom sides for Dice 1 (positions)

  const dice2Sides = [
    "Bedroom",
    "Bathroom",
    "Kitchen",
    "Living Room",
    "Balcony",
    "Car",
  ]; // Custom sides for Dice 2 (places)

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
      <h1>Gamzeyle Trabzona Hediye</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <div
          className={`dice ${rolling ? "rolling" : ""}`}
          style={{
            width: "120px", // Increased by 50%
            height: "120px", // Increased by 50%
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px", // Increased by 50%
            fontWeight: "bold",
            border: "3px solid black", // Slightly thicker border for balance
            borderRadius: "15px", // Adjusted for larger size
            backgroundColor: "#f0f0f0",
          }}
        >
          {result1}
        </div>
        <div
          className={`dice ${rolling ? "rolling" : ""}`}
          style={{
            width: "120px", // Increased by 50%
            height: "120px", // Increased by 50%
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px", // Increased by 50%
            fontWeight: "bold",
            border: "3px solid black", // Slightly thicker border for balance
            borderRadius: "15px", // Adjusted for larger size
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
          padding: "15px 30px", // Slightly larger button
          fontSize: "18px",
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
