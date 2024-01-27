console.log("core js is loaded");
const fs = require("fs");

// create a note.txt file
const notes = [
  {
    fileName: "zahin.txt",
    content: "This file was created by Zahin!",
  },
  {
    fileName: "arif.txt",
    content: "This file was created by Arif!",
  },
  {
    fileName: "aqif.txt",
    content: "This file was created by Aqif!",
  },
];

const htmlContent = `
    <html>
        <head>
            <title>My First HTML</title>
            <link rel="stylesheet" href="style.css">
            <script src="script.js" defer></script>
        </head>
        <body>
            <h1>Hello World</h1>
            <p>This is my first HTML file</p>
        </body>
    </html>
`;

const cssContent = `
    body {
        background-color: red;
    }
`;

const javascriptContent = `
    console.log("Hello World");
`;

// loop through the notes array and create a file for each note
for (let i = 0; i < notes.length; i++) {
  let note = notes[i];
  fs.writeFile(note.fileName, note.content, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("File created successfully!");
    }
  });
}

// create a html file
fs.writeFile("index.html", htmlContent, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("HTML file created successfully!");
  }
});

// create a css file
fs.writeFile("style.css", cssContent, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("CSS file created successfully!");
  }
});

// create a javascript file
fs.writeFile("script.js", javascriptContent, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Javascript file created successfully!");
  }
});
