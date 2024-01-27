console.log("index.js loaded");
import { __dirname } from "./global/index.js";
// const math = require("./math.mjs");
// const time = require("./time.mjs");
import math from "./math.js";
import time from "./time.js";

console.log(__dirname);

console.log(math.add(1, 2));
console.log(math.sub(1, 2));
console.log(time.year);
console.log(time.month);
