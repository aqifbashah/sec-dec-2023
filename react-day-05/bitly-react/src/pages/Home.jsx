import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function navigateToRegister() {
    navigate("/register");
  }
  function navigateToLogin() {
    navigate("/login");
  }
  function navigateToDashboard() {
    navigate("/dashboard");
  }
  const token = localStorage.getItem("token");
  return (
    <div>
      <h1>Home</h1>
      <button onClick={navigateToRegister}>Register</button>
      <button onClick={navigateToLogin}>Login</button>
      {token ? <button onClick={navigateToDashboard}>Dashboard</button> : null}
    </div>
  );
}

export default Home;
