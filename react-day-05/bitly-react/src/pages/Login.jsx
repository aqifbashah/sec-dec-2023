import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  function navigateToHome() {
    navigate("/");
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());

    try {
      const response = await axios.post(
        "https://bitly-clone-2.onrender.com/api/login",
        values
      );
      const token = response.data.jwt;
      // Save the token to local storage to call private APIs
      localStorage.setItem("token", token);
      alert("Logged in successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button onClick={navigateToHome}>Back</button>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email or Username" name="identifier" />
        <input type="password" placeholder="Password" name="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
