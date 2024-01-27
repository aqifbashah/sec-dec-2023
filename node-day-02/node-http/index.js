const http = require("http");
const fs = require("fs");

// read html file
let htmlContent = fs.readFileSync("index.html", "utf8");
let userContent = fs.readFileSync("user.html", "utf8");
let notFound = fs.readFileSync("not-found.html", "utf8");
let cssContent = fs.readFileSync("public/style.css", "utf8");
let jsContent = fs.readFileSync("public/script.js", "utf8");

const server = http.createServer(function (req, res) {
  // plain text
  // res.setHeader("Content-Type", "text/plain");
  // res.end("Hello World from Node.js HTTP Server");

  // html
  // res.setHeader("Content-Type", "text/html");
  // res.end(htmlContent);

  res.setHeader("Content-Type", "text/html");
  // routing
  // css and js
  if (req.url === "/style.css") {
    res.setHeader("Content-Type", "text/css");
    res.end(cssContent);
    return;
  } else if (req.url === "/script.js") {
    res.setHeader("Content-Type", "text/javascript");
    res.end(jsContent);
    return;
  }
  // html
  if (req.url === "/user") {
    res.end(userContent);
    return;
  } else if (req.url === "/") {
    res.end(htmlContent);
    return;
  } else {
    res.end(notFound);
    return;
  }
});

// listen on port 3000
const port = 3000;
server.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
