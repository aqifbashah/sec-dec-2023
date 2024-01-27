// querySelector for the button
let buttonLeft = document.querySelector("#btnLeft");
let buttonRight = document.querySelector("#btnRight");
let pacman = document.querySelector("#pacman");

// pacman value

//  detect mouse click

// 1. onclick event
// declare a function
// call the function when the button is clicked at the HTML

function buttonUpClick() {
  console.log("button up");
  let pacmanTop = parseInt(pacman.style.top, 10);
  pacman.style.top = pacmanTop - 100 + "px";
}

function buttonDownClick() {
  console.log("button down");
  // get the current value of the top
  // https://stackoverflow.com/questions/4860244/how-to-delete-px-from-245px
  let pacmanTop = parseInt(pacman.style.top, 10);
  // change the value of the top by 100px increment
  pacman.style.top = pacmanTop + 100 + "px";
}

// 2. addEventListener
// set id for the button

// declare a function
function buttonLeftClick() {
  console.log("button left");
  let pacmanLeft = parseInt(pacman.style.left, 10);
  pacman.style.left = pacmanLeft - 100 + "px";
}
function buttonRightClick() {
  console.log("button right");
  let pacmanLeft = parseInt(pacman.style.left, 10);
  pacman.style.left = pacmanLeft + 100 + "px";
}

// addEventListener
buttonLeft.addEventListener("click", buttonLeftClick);
buttonRight.addEventListener("click", buttonRightClick);

// add keydown event listener to move the pacman
window.addEventListener("keydown", function (event) {
  if (event.key == "ArrowDown") {
    console.log("ArrowDown is pressed");
    buttonDownClick();
  }
  if (event.key == "ArrowUp") {
    console.log("ArrowUp is pressed");
    buttonUpClick();
  }
  if (event.key == "ArrowRight") {
    console.log("ArrowRight is pressed");
    buttonRightClick();
  }
  if (event.key == "ArrowLeft") {
    console.log("ArrowLeft is pressed");
    buttonLeftClick();
  }
});
