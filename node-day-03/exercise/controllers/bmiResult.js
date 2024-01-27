import path from "path";
import fs from "fs";
import { __dirname } from "../global/index.js";

const bmiResultPage = fs.readFileSync(
  path.join(__dirname, "../pages/bmi-result.html"),
  "utf8"
);

// read User.json
const Users = fs.readFileSync(
  path.join(__dirname, "../models/Users.json"),
  "utf8"
);

// convert Users.json to array
const usersArray = JSON.parse(Users);

const bmiResult = function (req, res) {
  const username = req.body.username;
  const weight = req.body.weight;
  const height = req.body.height;

  const bmi = weight / (height * height);
  let bmiClass = "";

  if (bmi <= 15) {
    bmiClass = "Very severly underweight";
  } else if (bmi <= 16) {
    bmiClass = "Severly underweight";
  } else if (bmi <= 18.5) {
    bmiClass = "Underweight";
  } else if (bmi <= 25) {
    bmiClass = "Normal";
  } else if (bmi <= 30) {
    bmiClass = "Overweight";
  } else if (bmi <= 35) {
    bmiClass = "Obese Class I </br> (Moderately Obese)";
  } else if (bmi <= 40) {
    bmiClass = "Obese Class II </br> (Severely Obese)";
  } else {
    bmiClass = "Obese Class III </br> (Very Severely Obese)";
  }

  // save data to User.json
  const newUser = {
    username: username,
    weight: weight,
    height: height,
    bmi: bmi,
    bmiClass: bmiClass,
  };

  // insert new user to usersArray
  usersArray.push(newUser);
  // save usersArray to Users.json
  fs.writeFileSync(
    path.join(__dirname, "../models/Users.json"),
    JSON.stringify(usersArray, null, 2),
    "utf8"
  );

  const updatedPage = bmiResultPage
    .replace("###BMI###", bmi.toFixed(2))
    .replace("###BMIClass###", bmiClass);

  res.setHeader("Content-Type", "text/html");
  res.write(updatedPage);
};

export default bmiResult;
