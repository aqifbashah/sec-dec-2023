let photoSlidesDOM = document.querySelector("#photoSlides");
let prevBtnDOM = document.querySelector("#prev");
let nextBtnDOM = document.querySelector("#next");

photoSlidesDOM.setAttribute("src", "assets/1.jpg");
let currentImageNumber = 1;
let totalImageNumber = 3;

function nextImage() {
  currentImageNumber = currentImageNumber + 1;
  let nextImagePath = "assets/" + currentImageNumber + ".jpg";
  photoSlidesDOM.setAttribute("src", nextImagePath);

  // reset the currentImageNumber to 1 if it is greater than totalImageNumber
  if (currentImageNumber > totalImageNumber) {
    currentImageNumber = 1;
    photoSlidesDOM.setAttribute("src", "assets/1.jpg");
  }
}

nextBtnDOM.addEventListener("click", nextImage);

// auto slide
// receive two arguments (function, time)
// time is in milliseconds

// invoke as expression
setInterval(nextImage, 6000);

// invoke as function declaration
// setInterval(function () {
//   nextImage();
// }, 3000);

// TASK FOR ASSESSTMENT
// 1. Create a function called prevImage
// 2. Loop through the images in reverse order
// 3. Enhance the style of the photo slides
