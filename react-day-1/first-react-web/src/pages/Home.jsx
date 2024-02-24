import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  const navigate = useNavigate();

  function handleNavigateToHome() {
    navigate("/");
  }
  function handleNavigateToAbout() {
    navigate("/about");
  }
  function handleNavigateToExample() {
    navigate("/example");
  }
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <div>
        <button onClick={handleNavigateToHome}>Home</button>
        <button onClick={handleNavigateToAbout}>About</button>
        <button onClick={handleNavigateToExample}>Example</button>
      </div>
    </div>
  );
}

export default Home;
