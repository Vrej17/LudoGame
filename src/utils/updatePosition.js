export function updatePosition(prev, currentPlayer, selectedIndex, stepsLeft) {
  const updated = [...prev[currentPlayer]];

  const nextValue =
    updated[selectedIndex] < 4
      ? 3 + stepsLeft
      : updated[selectedIndex] + stepsLeft;

  if (nextValue >= 60) {
    updated.splice(selectedIndex, 1);
  } else {
    updated[selectedIndex] = nextValue;
  }
  return {
    ...prev,
    [currentPlayer]: updated,
  };
}
