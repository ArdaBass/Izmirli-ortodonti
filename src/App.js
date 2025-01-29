import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const dice1Sides = [
    "Missionary",
    "Doggy Style",
    "Cowgirl",
    "Reverse Cowgirl",
    "Spooning",
    "Standing",
  ];

  const dice2Sides = [
    "Bedroom",
    "Bathroom",
    "Kitchen",
    "Living Room",
    "Balcony",
    "Car",
  ];

  const [result1, setResult1] = useState("-");
  const [result2, setResult2] = useState("-");
  const [rolling, setRolling] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const audio = new Audio("/background-music.mp3");
    const playAudio = () => {
      audio.play().catch((error) => console.log("Audio blocked:", error));
    };
    document.addEventListener("click", playAudio, { once: true });
    return () => document.removeEventListener("click", playAudio);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const targetDate = new Date("January 1, 2028 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return "🎉 Happy 2028! 🎉";

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
  }

  const rollDice = () => {
    setRolling(true);
    let rollingInterval;

    rollingInterval = setInterval(() => {
      const randomSide1 = dice1Sides[Math.floor(Math.random() * dice1Sides.length)];
      const randomSide2 = dice2Sides[Math.floor(Math.random() * dice2Sides.length)];
      setResult1(randomSide1);
      setResult2(randomSide2);
    }, 100);

    setTimeout(() => {
      clearInterval(rollingInterval);
      setResult1(dice1Sides[Math.floor(Math.random() * dice1Sides.length)]);
      setResult2(dice2Sides[Math.floor(Math.random() * dice2Sides.length)]);
      setRolling(false);
    }, 1000);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", position: "relative" }}>
      <h1>Alp 💜 Ece</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <div className={`dice ${rolling ? "rolling" : ""}`} style={diceStyle}>{result1}</div>
        <div className={`dice ${rolling ? "rolling" : ""}`} style={diceStyle}>{result2}</div>
      </div>
      <button onClick={rollDice} style={buttonStyle} disabled={rolling}>
        {rolling ? "Rolling..." : "Roll Dice"}
      </button>
      <div className="fish-container">
        <img src="/fish.jpg" alt="Fish" className="fish left-to-right" />
        <img src="/fish.jpg" alt="Fish" className="fish right-to-left" />
      </div>
      <div style={countdownStyle}>
         <span style={countdownTextStyle}>{timeLeft}</span>
      </div>
    </div>
  );
}

const diceStyle = {
  width: "120px",
  height: "120px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  fontWeight: "bold",
  border: "3px solid black",
  borderRadius: "15px",
  backgroundColor: "#f0f0f0",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "15px 30px",
  fontSize: "18px",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
};

const countdownStyle = {
  marginTop: "30px",
  fontSize: "20px",
  fontWeight: "bold",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "#222",
  color: "#fff",
  display: "inline-block",
};

const countdownTextStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#ffcc00",
};

export default App;
