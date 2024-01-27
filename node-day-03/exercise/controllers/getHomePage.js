import path from "path";
import fs from "fs";
import { __dirname } from "../global/index.js";

const homeHtmlContent = fs.readFileSync(
  path.resolve(__dirname, "../pages/home.html"),
  "utf-8"
);

function getHomePage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(homeHtmlContent);
}

export default getHomePage;
