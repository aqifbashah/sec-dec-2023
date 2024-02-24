import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Register() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  function navigateToHome() {
    navigate("/");
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());
    console.log(values);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://bitly-clone-2.onrender.com/api/register",
        values
      );
      console.log(response);
      alert("Registered sucessfully");
      navigate("/login");
    } catch (error) {
      // api error handling
      alert("Registration failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <button onClick={navigateToHome}>Back</button>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Username" name="user_name" />
        <input type="password" placeholder="Password" name="password" />
        <input
          disabled={isLoading}
          type="submit"
          value={isLoading ? "Registering..." : "Register"}
        />
      </form>
    </div>
  );
}

export default Register;
