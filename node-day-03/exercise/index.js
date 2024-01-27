console.log("index.js is loaded");
import express from "express";
import getHomePage from "./controllers/getHomePage.js";
import bmiResult from "./controllers/bmiResult.js";

const server = express();

// middleware
server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", getHomePage);
server.post("/", bmiResult);

const PORT = 3000;
server.listen(PORT, function () {
  console.log(`Server is running at http://localhost:${PORT}`);
});
