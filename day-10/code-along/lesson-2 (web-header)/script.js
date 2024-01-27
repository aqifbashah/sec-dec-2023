let openButtonDOM = document.querySelector("#openMenuMobile");
let closeButtonDOM = document.querySelector("#closeMenuMobile");
let menuMobileListDOM = document.querySelector("#menuMobileList");

// function openMenuMobile() {
//   menuMobileListDOM.style.display = "flex";
// }

// function closeMenuMobile() {
//   menuMobileListDOM.style.display = "none";
// }

// refactoring
function handleMenuMobile(value) {
  menuMobileListDOM.style.display = value;
}

openButtonDOM.addEventListener("click", function () {
  handleMenuMobile("flex");
});
closeButtonDOM.addEventListener("click", function () {
  handleMenuMobile("none");
});

// TASK FOR ASSESSTMENT
// 1. Click outside menu mobile to close menu mobile
// 2. Slide in animation in css
// 3. Slide out animation in css
