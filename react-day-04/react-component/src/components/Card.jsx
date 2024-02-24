import { ButtonOutline } from "./Button";

function handleClick() {
  alert("Hello World");
}
function Card(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <div style={{ padding: "1rem" }}>
        <h3>{props.title || "Title"}</h3>
        <h5>{props.description || "This is description"}</h5>
      </div>
      <hr style={{ margin: "1rem 0", border: "1px solid black" }} />
      <p style={{ padding: "1rem" }}>
        {props.text ||
          "This is a sample text in a card with a title and description"}
      </p>
      <div style={{ padding: "0 1rem 1rem" }}>
        <ButtonOutline text="Read more" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Card;
