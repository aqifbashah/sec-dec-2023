const path = require("path");
const fs = require("fs");

const aboutHtmlContent = fs.readFileSync(
  path.resolve(__dirname, "../pages/about.html"),
  "utf-8"
);

function getAboutPage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(aboutHtmlContent);
}

module.exports = getAboutPage;
