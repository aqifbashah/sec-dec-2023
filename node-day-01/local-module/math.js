function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

console.log("math.js is loaded");

const math = { add: add, substract: substract };

module.exports = math;
