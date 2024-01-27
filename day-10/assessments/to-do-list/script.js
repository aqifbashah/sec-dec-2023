let formDOM = document.querySelector("#todoForm");
let orderedListDOM = document.querySelector("#todoList");
let delAllButtonDOM = document.querySelector("#delAllButton");

function formSubmitted(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let value = formData.get("todo");

  if (value === "" || value === null) {
    alert("Do not leave blanks for the to-do list");
  } else {
    let newListItem = document.createElement("li");
    newListItem.setAttribute("id", "listItem");
    orderedListDOM.appendChild(newListItem);

    let newListDiv = document.createElement("div");
    newListDiv.setAttribute("id", "listDiv");
    newListItem.appendChild(newListDiv);
    newListDiv.innerText = value;

    let newButtonsDiv = document.createElement("div");
    newButtonsDiv.setAttribute("id", "buttonsDiv");
    newListDiv.appendChild(newButtonsDiv);

    let newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("id", "checkbox");
    newCheckbox.setAttribute("style", "margin: 5px");
    newButtonsDiv.appendChild(newCheckbox);

    let newDelButton = document.createElement("button");
    newDelButton.setAttribute("id", "delButton");
    newButtonsDiv.appendChild(newDelButton);

    let delButtonIcon = document.createElement("i");
    delButtonIcon.setAttribute("class", "bi bi-trash");
    newDelButton.appendChild(delButtonIcon);
  }

  event.target.reset();
}

function delAll(event) {
  orderedListDOM.replaceChildren();
}
// if ()
// newDelButton.addEventListener("click", delList);

formDOM.addEventListener("submit", formSubmitted);
delAllButtonDOM.addEventListener("click", delAll);
