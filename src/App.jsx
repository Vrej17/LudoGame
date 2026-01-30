import { useEffect, useState } from "react";
import Player from "./components/Player";
import Dice from "./components/Dice";
import "./App.css";
import { SIZE, PLAYER_FIELD_COLORS, CELL } from "./constants/constants";
import {
  isPlayerHome,
  isAnyBluePlayerHere,
  isAnyRedPlayerHere,
} from "./utils/isPlayers";
import { updatePosition } from "./utils/updatePosition";

export default function App() {
  const [positions, setPositions] = useState({
    blue: [0, 1, 2, 3],
    red: [0, 1, 2, 3],
  });

  const [stepsLeft, setStepsLeft] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState("blue");
  const [walking, setWalking] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (selectedIndex === null || stepsLeft === 0) return;

    setPositions((prev) =>
      updatePosition(prev, currentPlayer, selectedIndex, stepsLeft),
    );

    setStepsLeft(0);
    setSelectedIndex(null);
    setWalking(false);
    setCurrentPlayer((p) => (p === "blue" ? "red" : "blue"));
  }, [selectedIndex, stepsLeft, currentPlayer]);

  const onDiceRoll = (value) => {
    if (walking) return;
    setWalking(true);
    setStepsLeft(value);
  };

  useEffect(() => {
    if (!positions.blue.length) {
      setWinner("Blue");
    }
    if (!positions.red.length) {
      setWinner("Red");
    }
  }, [positions]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${SIZE}, ${CELL}px)`,
          gap: "4px",
          position: "relative",
          marginBottom: 20,
        }}
      >
        {Array.from({ length: SIZE * SIZE }).map((_, i) => {
          const r = Math.floor(i / SIZE);
          const c = i % SIZE;
          const isBorder =
            r === 0 || c === 0 || r === SIZE - 1 || c === SIZE - 1;
          let wayPoint = null;
          if (r === 7 && c === 7) wayPoint = "#21db14";
          else if (c === 7 && r < 7) wayPoint = PLAYER_FIELD_COLORS.red;
          else if (c === 7 && r > 7) wayPoint = PLAYER_FIELD_COLORS.blue;

          const home = isPlayerHome(r, c);
          const idxOfBluePlayer = isAnyBluePlayerHere(r, c, positions);
          const idxOfRedPlayer = isAnyRedPlayerHere(r, c, positions);

          return (
            <div
              key={i}
              style={{
                width: CELL,
                height: CELL,
                borderRadius: 6,
                border: isBorder ? "1px solid #333" : "none",
                backgroundColor:
                  wayPoint ||
                  (home ? PLAYER_FIELD_COLORS[home] : "transparent"),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              {idxOfBluePlayer >= 0 && (
                <Player
                  stepsLeft={stepsLeft}
                  currentPlayer={currentPlayer == "blue"}
                  handleChoose={() =>
                    currentPlayer == "blue" &&
                    stepsLeft &&
                    setSelectedIndex(idxOfBluePlayer)
                  }
                  selectedIndex={selectedIndex}
                  color={"#1336ab"}
                />
              )}

              {idxOfRedPlayer >= 0 && (
                <Player
                  selectedIndex={selectedIndex}
                  currentPlayer={currentPlayer == "red"}
                  stepsLeft={stepsLeft}
                  handleChoose={() =>
                    currentPlayer == "red" &&
                    stepsLeft &&
                    setSelectedIndex(idxOfRedPlayer)
                  }
                  color={"#e00d4d"}
                />
              )}
            </div>
          );
        })}
      </div>
      <p>
        Turn: <b>{currentPlayer.toUpperCase()}</b>
      </p>

      <Dice onRoll={onDiceRoll} disabled={walking || winner.length !== 0} />
      {winner.length !== 0 && (
        <div className="winner-container">
          <h1>🏆 Winner is {winner} 🎉</h1>
        </div>
      )}
    </>
  );
}
