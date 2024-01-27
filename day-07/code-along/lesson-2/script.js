// 1. Function in javascript

// DECLARE A FUNCTION
function myFunction() {
  // function scope
  console.log("Hello World");
}

function myFunction2() {
  // function scope
  console.log("Hello Mars");
}

// Call function / Execute fuction / Run function / Invoke function
myFunction();

// 2. Function with paramaters
// Declare a paramater "name" in function
function myFunction3(name) {
  // function scope
  console.log("Hello " + name);
}

myFunction3("John");
myFunction3("Jupiter");

let greeting = myFunction3("Johan");
console.log(greeting);

// 3. Function with return value
function myFunction4(name) {
  return "Salam " + name;
}
let greetingSalam = myFunction4("Johan");
console.log(greetingSalam);
