import { ButtonSolid } from "./components/Button";
import MEME_DATA from "./assets/meme.json";
import { useState } from "react";

function App() {
  const [selectedMeme, setSelectedMeme] = useState("");

  function handleRandomised() {
    const memeLength = MEME_DATA.length;
    const randomIndex = Math.floor(Math.random() * memeLength);
    setSelectedMeme(MEME_DATA[randomIndex]);
    console.log(selectedMeme);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <img
          src={selectedMeme.url}
          alt="meme image"
          style={{
            width: selectedMeme.width + "px",
            height: selectedMeme.height + "px",
          }}
        />
        <ButtonSolid text="Randomise" onClick={handleRandomised} />
      </div>
    </div>
  );
}

export default App;
