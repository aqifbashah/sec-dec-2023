let dictionaryFormDOM = document.querySelector("#dictionaryForm");
let searchWordDOM = document.querySelector("#searchWord");
let orderedListDOM = document.querySelector("#definitions");
let loadingDOM = document.querySelector("#loading");

async function formSubmitted(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let word = formData.get("word");

  //   let word = searchWordDOM.value;
  searchWordDOM.innerText = word;

  // api call
  // https://api.dictionaryapi.dev/api/v2/entries/en/<word>
  // loading state
  loadingDOM.style.display = "block";
  // clear the previous results;
  // delete all the children of orderedListDOM
  orderedListDOM.replaceChildren();
  fetchDefinition(word)
    .then(function (data) {
      // handle resolve
      let arrayMeanings = data[0].meanings;
      console.log(arrayMeanings);
      // loop through the meanings
      for (let i = 0; i < arrayMeanings.length; i++) {
        let newLiDom = document.createElement("li");
        newLiDom.innerText = arrayMeanings[i].definitions[0].definition;
        orderedListDOM.appendChild(newLiDom);
      }
      // loading state stop
      loadingDOM.style.display = "none";
    })
    .catch(function (error) {
      // handle reject
      console.log("error", error);
    });

  // clear the input field
  event.target.reset();
}

async function fetchDefinition(word) {
  let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
  // IMPORTANT: fetch will return a promise
  return fetch(url)
    .then(async function (response) {
      // handle resolve
      //   handle 200
      if (response.ok === true) {
        return response.json().then(function (data) {
          // return data to fetchDefinition
          return data;
        });
      } else {
        throw response;
      }
    })
    .catch(function (error) {
      // handle reject
      console.log("error", error);
    });
}

dictionaryFormDOM.addEventListener("submit", formSubmitted);
