const path = require("path");
const fs = require("fs");

const homeHtmlContent = fs.readFileSync(
  path.resolve(__dirname, "../pages/home.html"),
  "utf-8"
);

function getHomePage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(homeHtmlContent);
}

module.exports = getHomePage;
