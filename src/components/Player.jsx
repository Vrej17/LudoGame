export default function Player({
  color,
  handleChoose,
  selectedIndex,
  currentPlayer,
  stepsLeft,
}) {
  return (
    <div
      onClick={handleChoose}
      className={
        selectedIndex == null && stepsLeft && currentPlayer
          ? "player-bounce"
          : ""
      }
      style={{
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: color,

        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
    />
  );
}
