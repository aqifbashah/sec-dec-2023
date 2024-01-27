const express = require("express");
const fs = require("fs");
const path = require("path");

const server = express();

const home = fs.readFileSync(path.join(__dirname, "/pages/home.html"), "utf8");
const notFound = fs.readFileSync(
  path.join(__dirname, "/pages/not-found.html"),
  "utf8"
);

server.use(express.static("public"));

server.get("/", function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(home);
  return;
});

server.get("*", function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(notFound);
  return;
});

server.listen(3000, function () {
  console.log("Server is live on http://localhost:3000");
});
