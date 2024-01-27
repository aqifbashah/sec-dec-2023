// querySelector for the button
let buttonLeft = document.querySelector("#btnLeft");
let buttonRight = document.querySelector("#btnRight");
let buttonUp = document.querySelector("#btnUp");
let buttonDown = document.querySelector("#btnDown");
let pacman = document.querySelector("#pacman");

// functions
function buttonUpClick() {
  console.log("button up");
  let pacmanTop = parseInt(pacman.style.top, 10);
  if (pacmanTop > 0) {
    pacman.style.top = pacmanTop - 100 + "px";
  } else {
    alert("You have reached the boundary");
  }
}

function buttonDownClick() {
  console.log("button down");
  let pacmanTop = parseInt(pacman.style.top, 10);
  if (pacmanTop < 700) {
    pacman.style.top = pacmanTop + 100 + "px";
  } else {
    alert("You have reached the boundary");
  }
}
function buttonLeftClick() {
  console.log("button left");
  let pacmanLeft = parseInt(pacman.style.left, 10);
  if (pacmanLeft > 0) {
    pacman.style.left = pacmanLeft - 100 + "px";
  } else {
    alert("You have reached the boundary");
  }
}
function buttonRightClick() {
  console.log("button right");
  let pacmanLeft = parseInt(pacman.style.left, 10);
  if (pacmanLeft < 700) {
    pacman.style.left = pacmanLeft + 100 + "px";
  } else {
    alert("You have reached the boundary");
  }
}

// addEventListener
buttonLeft.addEventListener("click", buttonLeftClick);
buttonRight.addEventListener("click", buttonRightClick);
buttonUp.addEventListener("click", buttonUpClick);
buttonDown.addEventListener("click", buttonDownClick);

// add keydown event listener to move the pacman
window.addEventListener("keydown", function (event) {
  if (event.key == "ArrowDown") {
    console.log("ArrowDown is pressed");
    buttonDown.style.backgroundColor = "white";
    buttonDownClick();
  }
  if (event.key == "ArrowUp") {
    console.log("ArrowUp is pressed");
    buttonUp.style.backgroundColor = "white";
    buttonUpClick();
  }
  if (event.key == "ArrowRight") {
    console.log("ArrowRight is pressed");
    buttonRight.style.backgroundColor = "white";
    buttonRightClick();
  }
  if (event.key == "ArrowLeft") {
    console.log("ArrowLeft is pressed");
    buttonLeft.style.backgroundColor = "white";
    buttonLeftClick();
  }
});

window.addEventListener("keyup", function (event) {
  buttonUp.style.backgroundColor = "";
  buttonDown.style.backgroundColor = "";
  buttonRight.style.backgroundColor = "";
  buttonLeft.style.backgroundColor = "";
});
