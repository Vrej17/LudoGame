import {generateBluesPath, generateBorderPath, generateRedsPath} from "../utils/generatePaths";

const PLAYER_FIELD_COLORS = { blue: "#5d57fb", red: "#ab1818" };
const SIZE = 15;
const CELL = 48;
const BLUES_HOME = { r: 12, c: 1 };
const REDS_HOME = { r: 1, c: 12 };
const PATH = generateBorderPath(SIZE);
const BLUE_PATH = generateBluesPath(SIZE)
const REDS_PATH = generateRedsPath(SIZE)

export {PLAYER_FIELD_COLORS,SIZE,CELL,PATH,BLUES_HOME,BLUE_PATH,REDS_HOME,REDS_PATH} 