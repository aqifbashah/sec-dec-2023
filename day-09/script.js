let buttonDOM = document.querySelector("button");

window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown") {
    console.log(event.key);
    buttonDOM.style.backgroundColor = "yellow";
  }
});

window.addEventListener("keyup", function (event) {
  buttonDOM.style.backgroundColor = "";
});
