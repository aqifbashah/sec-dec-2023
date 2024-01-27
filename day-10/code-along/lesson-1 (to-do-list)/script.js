// get the input value, console.log when the button is clicked

// let inputDOM = document.querySelector("#todo");
// let buttonDOM = document.querySelector("#add");
let formDOM = document.querySelector("#todoForm");
let orderedListDOM = document.querySelector("#todoList");

// get the value of an input
// 1. onChange event listener

// function inputChanged(event) {
//   console.log(event.target.value);
// }

// inputDOM.addEventListener("change", inputChanged);

// 2. input DOM value
// function buttonClicked() {
//   let inputValue = inputDOM.value;
//   console.dir(inputValue);
// }

// buttonDOM.addEventListener("click", buttonClicked);

// 3. form submit event

function formSubmitted(event) {
  //  IMPORTANT: prevent the default behaviour of the form
  event.preventDefault();
  // 3a. get the input value
  //   let value = event.target[0].value;
  //   console.log(value);

  // 3b. get form data
  let formData = new FormData(event.target);
  let value = formData.get("todo");
  console.log(value);

  // 3c. create a new list item
  let newListItem = document.createElement("li");
  let newCheckbox = document.createElement("input");
  newCheckbox.setAttribute("type", "checkbox");
  newListItem.innerText = value;
  orderedListDOM.appendChild(newListItem);
  newListItem.appendChild(newCheckbox);
}

formDOM.addEventListener("submit", formSubmitted);

// ideas for the to do list
// - clear the input after the form is submitted
// - prevent empty values from being added to the list
// - add a delete button to each list item
// - add delete all button
// - enhance!!
