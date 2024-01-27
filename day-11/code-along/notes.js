// 1. object in javascript
const personName = "John";
const personAge = 25;
const personSchool = "MIT";

const personName2 = "Jane";
const personAge2 = 23;
const personSchool2 = "Harvard";

// consist of key value pairs
// key: value
const person1 = {
  name: "John",
  age: 25,
  school: "MIT",
  isMarried: false,
  subjects: ["Math", "Physics", "Chemistry"],
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
    zip: "02101",
  },
};

const person2 = {
  name: "Jane",
  age: 23,
  school: "Harvard",
  isMarried: false,
  subjects: ["Math", "Physics", "Chemistry"],
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
    zip: "02101",
  },
};

// 2. Promise in javascript
// it represent future value

// variable declaration
// let weather = "sunny";

// promise is a variable that represent future value

// it always has 3 states
// 1. pending
// 2. resolved
// 3. rejected

// promise is a constructor function
// make it as function async
async function getWeatherTonight(humidity) {
  return new Promise(function (resolve, reject) {
    if (humidity > 50) {
      reject("It's going to rain tonight");
    } else {
      resolve("It's going to be a clear night");
    }
  });
}

// getWeatherTonight(60)
getWeatherTonight(60)
  .then(function (result) {
    // then the promise is resolved
    // then scope
    console.log("A", result);
  })
  .catch(function (error) {
    // catch the error
    // catch scope
    // when promise is rejected
    console.log("B", error);
  });
