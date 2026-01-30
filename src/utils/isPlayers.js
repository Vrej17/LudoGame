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
export function isAnyBluePlayerHere(r, c, positions) {
  for (let i = 0; i < positions.blue.length; i++) {
    if (
      r == BLUE_PATH[positions.blue[i]].r &&
      c == BLUE_PATH[positions.blue[i]].c
    )
      return i;
  }
}
export function isAnyRedPlayerHere(r, c, positions) {
  for (let i = 0; i < positions.red.length; i++) {
    if (
      r == REDS_PATH[positions.red[i]].r &&
      c == REDS_PATH[positions.red[i]].c
    )
      return i;
  }
}
