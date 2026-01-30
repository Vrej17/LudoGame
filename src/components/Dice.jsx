import { useState } from "react";

export default function Dice({ onRoll, disabled = false }) {
  const [value, setValue] = useState(1);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (rolling || disabled) return;

    setRolling(true);

    const finalValue = Math.floor(Math.random() * 6) + 1;

    setTimeout(() => {
      setValue(finalValue);
      setRolling(false);
      onRoll(finalValue);
    }, 600);
  };

  return (
    <div
      style={{
        marginTop:'60px',
        width: 60,
        height: 60,
        borderRadius: 12,
        background: "#fff",
        border: "2px solid #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 28,
        fontWeight: "bold",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        userSelect: "none",
      }}
      onClick={rollDice}
    >
      Step {value}
    </div>
  );
}
