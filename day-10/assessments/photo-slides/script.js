let photoSlidesDOM = document.querySelector("#photoSlides");
let prevBtnDOM = document.querySelector("#prev");
let nextBtnDOM = document.querySelector("#next");
let backgroundDOM = document.querySelector("#background");

photoSlidesDOM.setAttribute("src", "assets/1.jpg");
backgroundDOM.setAttribute(
  "style",
  `background: url(./assets/1.jpg) 50% 50% / cover no-repeat `
);
let currentImageNumber = 1;
let totalImageNumber = 5;

function nextImage() {
  currentImageNumber = currentImageNumber + 1;
  let nextImagePath = `assets/${currentImageNumber}.jpg`;
  photoSlidesDOM.setAttribute("src", nextImagePath);
  backgroundDOM.setAttribute(
    "style",
    `background: url(./${nextImagePath}) 50% 50% / cover no-repeat `
  );

  // reset the currentImageNumber to 1 if it is greater than totalImageNumber
  if (currentImageNumber > totalImageNumber) {
    currentImageNumber = 1;
    photoSlidesDOM.setAttribute("src", "assets/1.jpg");
    backgroundDOM.setAttribute(
      "style",
      `background: url(./assets/1.jpg) 50% 50% / cover no-repeat `
    );
  }

  clearInterval(myTimer);
  myTimer = setInterval(nextImage, 6000);
}

function prevImage() {
  currentImageNumber = currentImageNumber - 1;
  let prevImagePath = `assets/${currentImageNumber}.jpg`;
  photoSlidesDOM.setAttribute("src", prevImagePath);
  backgroundDOM.setAttribute(
    "style",
    `background: url(./${prevImagePath}) 50% 50% / cover no-repeat `
  );

  if (currentImageNumber < 1) {
    currentImageNumber = totalImageNumber;
    photoSlidesDOM.setAttribute("src", `assets/${totalImageNumber}.jpg`);
    backgroundDOM.setAttribute(
      "style",
      `background: url(./assets/${totalImageNumber}.jpg) 50% 50% / cover no-repeat `
    );
  }

  clearInterval(myTimer);
  myTimer = setInterval(nextImage, 6000);
}

nextBtnDOM.addEventListener("click", nextImage);
prevBtnDOM.addEventListener("click", prevImage);

// auto slide
// receive two arguments (function, time)
// time is in milliseconds

// invoke as expression
let myTimer = setInterval(nextImage, 6000);

// invoke as function declaration
// setInterval(function () {
//   nextImage();
// }, 3000);

// TASK FOR ASSESSTMENT
// 1. Create a function called prevImage
// 2. Loop through the images in reverse order
// 3. Enhance the style of the photo slides
