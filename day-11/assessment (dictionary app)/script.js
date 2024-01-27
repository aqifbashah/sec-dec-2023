let dictionaryFormDOM = document.querySelector("#dictionaryForm");
let searchWordDOM = document.querySelector("#searchWord");
let meaningsDOM = document.querySelector("#meanings");
let audioDOM = document.querySelector("#audio");
let upperBoxDOM = document.querySelector("#upperBox");
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
  audioDOM.replaceChildren();
  meaningsDOM.replaceChildren();

  fetchDefinition(word)
    .then(function (data) {
      // handle resolve
      let arrayMeanings = data[0].meanings;
      let arrayAudio = data[0].phonetics;
      console.log(arrayAudio);

      for (i = 0; i < arrayAudio.length; i++) {
        let newLiDOM = document.createElement("div");
        let newAudioDOM = document.createElement("audio");
        let audioURL = arrayAudio[i].audio;
        console.log(audioURL);
        if (audioURL == "" || audioURL == null) {
          console.log("no audio URL");
        } else {
          newAudioDOM.setAttribute("src", audioURL);
          newAudioDOM.setAttribute("controls", "controls");
          newLiDOM.appendChild(newAudioDOM);
          audioDOM.appendChild(newLiDOM);
        }
      }

      for (let i = 0; i < arrayMeanings.length; i++) {
        let newPOS = document.createElement("h3");
        newPOS.innerText = arrayMeanings[i].partOfSpeech;
        meaningsDOM.appendChild(newPOS);

        let newOlDOM = document.createElement("ol");
        meaningsDOM.appendChild(newOlDOM);

        let arrayDefinitions = data[0].meanings[i].definitions;
        console.log(arrayDefinitions);

        for (let i = 0; i < arrayDefinitions.length; i++) {
          let newLiDOM = document.createElement("li");
          newLiDOM.innerText = arrayDefinitions[i].definition;
          newOlDOM.appendChild(newLiDOM);
        }
      }

      // loop through the meanings

      // loading state stop
      loadingDOM.style.display = "none";
    })
    .catch(function (error) {
      // handle reject
      console.log("error", error);
      searchWordDOM.innerText = "error: word not found";
      loadingDOM.style.display = "none";
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
