const path = require("path");
const fs = require("fs");

const notFoundHtmlContent = fs.readFileSync(
  path.resolve(__dirname, "../pages/404.html"),
  "utf-8"
);

function getNotFoundPage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(notFoundHtmlContent);
}

module.exports = getNotFoundPage;
