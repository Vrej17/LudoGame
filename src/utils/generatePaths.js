import { BLUES_HOME, REDS_HOME } from "../constants/constants";

export function generateBorderPath(size) {
  const path = [];

  for (let c = 0; c < size; c++) path.push({ r: 0, c });
  for (let r = 1; r < size - 1; r++) path.push({ r, c: size - 1 });
  for (let c = size - 1; c >= 0; c--) path.push({ r: size - 1, c });
  for (let r = size - 2; r > 0; r--) path.push({ r, c: 0 });

  return path;
}
export function generateBluesPath(size) {
  const path = [];
  for (let r = size - 1; r > 0; r--) path.push({ r, c: 0 });
  for (let c = 0; c < size; c++) path.push({ r: 0, c });
  for (let r = 1; r < size - 1; r++) path.push({ r, c: size - 1 });

  let c = size - 1;
  let r = size - 1;
  while (c !== Math.floor(size / 2)) {
    path.push({ r, c });
    c--;
  }
  while (r !== Math.floor(size / 2)) {
    path.push({ r, c });
    r--;
  }

  return [
    { r: BLUES_HOME.r, c: BLUES_HOME.c },
    { r: BLUES_HOME.r + 1, c: BLUES_HOME.c + 1 },
    { r: BLUES_HOME.r + 1, c: BLUES_HOME.c },
    { r: BLUES_HOME.r, c: BLUES_HOME.c + 1 },
    ...path,
  ];
}
export function generateRedsPath(size) {
  const path = [];
  for (let r = 0; r < size - 1; r++) path.push({ r, c: size - 1 });
  for (let c = size - 1; c >= 0; c--) path.push({ r: size - 1, c });
  for (let r = size - 2; r > 0; r--) path.push({ r, c: 0 });
  let r = 0;
  let c = 0;
  while (c !== Math.floor(size / 2)) {
    path.push({ r, c });
    c++;
  }
  while (r !== Math.floor(size / 2) + 1) {
    path.push({ r, c });
    r++;
  }

  return [
    { r: REDS_HOME.r, c: REDS_HOME.c },
    { r: REDS_HOME.r + 1, c: REDS_HOME.c + 1 },
    { r: REDS_HOME.r + 1, c: REDS_HOME.c },
    { r: REDS_HOME.r, c: REDS_HOME.c + 1 },
    ...path,
  ];
}
