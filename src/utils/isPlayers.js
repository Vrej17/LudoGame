import {
  REDS_HOME,
  BLUES_HOME,
  REDS_PATH,
  BLUE_PATH,
} from "../constants/constants";

export function isPlayerHome(r, c) {
  const in2x2 = (home) =>
    r >= home.r && r < home.r + 2 && c >= home.c && c < home.c + 2;

  if (in2x2(BLUES_HOME)) return "blue";
  if (in2x2(REDS_HOME)) return "red";

  return null;
}
export function isAnyPlayerHere(r, c, playerPositions, PATH) {
  for (let i = 0; i < playerPositions.length; i++) {
    if (r == PATH[playerPositions[i]].r && c == PATH[playerPositions[i]].c)
      return i;
  }
}
