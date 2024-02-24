import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  // check token is valid
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isLoading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  async function checkToken() {
    // if token is not present, redirect to login
    if (!token) {
      navigate("/login");
    }
    // validate token by calling the private API
    try {
      setLoading(true);
      const response = await axios.get(
        "https://bitly-clone-2.onrender.com/api/protected",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserId(response.data.user.id);
    } catch (error) {
      // if token is invalid, redirect to login
      console.error(error);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  }

  // invoke checktoken by calling the function in the useEffect
  useEffect(() => {
    checkToken();
  }, []);

  function navigateToHome() {
    navigate("/");
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <button onClick={navigateToHome}>Back</button>
      <h1>Dashboard</h1>
      <h3>User ID: {userId}</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
