const fs = require("fs");
const path = require("path");

const thankYouPageHtml = fs.readFileSync(
  path.join(__dirname, "../pages/thank-you.html"),
  "utf8"
);
// read Users.json
const Users = fs.readFileSync(
  path.join(__dirname, "../model/Users.json"),
  "utf8"
);
// convert Users.json to array
const usersArray = JSON.parse(Users);

const postRegister = function (req, res) {
  // get data from req.body
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirm_password;

  // save data to User.json
  const newUser = {
    username: username,
    email: email,
    password: password,
  };

  // VALIDATION
  // check if username or email is already taken
  const isUsernameTaken = usersArray.some(function (user) {
    return user.username === username;
  });
  const isEmailTaken = usersArray.some(function (user) {
    return user.email === email;
  });
  if (isUsernameTaken || isEmailTaken) {
    res.send("Invalid data");
    return;
  }
  // insert new user to usersArray
  usersArray.push(newUser);
  // save usersArray to Users.json
  fs.writeFileSync(
    path.join(__dirname, "../model/Users.json"),
    JSON.stringify(usersArray, null, 2),
    "utf8"
  );

  // send thank you page to client
  res.setHeader("Content-Type", "text/html");
  // render dynamic html using string concatenation or replace method
  res.write(thankYouPageHtml.replace("##USERNAME##", username));
};

module.exports = postRegister;
