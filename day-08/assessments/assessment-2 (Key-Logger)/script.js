let key = document.querySelector("#key");
let keyCodei = document.querySelector("#keyCode");
let locationi = document.querySelector("#location");
let codei = document.querySelector("#code");

window.addEventListener("keydown", function (event) {
  key.innerText = event.key;
  keyCodei.innerText = event.keyCode;
  locationi.innerText = event.location;
  codei.innerText = event.code;
});
