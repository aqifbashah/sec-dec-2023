import { useState } from "react";

function FormB() {
  // default value for form data
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  function handleViewPasswordToggle() {
    setShowPassword(!showPassword);
  }
  function handleViewConfirmPasswordToggle() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  function handleInputChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
  }
  function handleSubmit() {
    console.log(formData);
  }
  return (
    <main>
      <div className="input-container">
        <h3>Form B</h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button className="btn-outline" onClick={handleViewPasswordToggle}>
          {showPassword ? "Hide" : "Show"} password
        </button>
      </div>
      <div className="input-container">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <button
          className="btn-outline"
          onClick={handleViewConfirmPasswordToggle}
        >
          {showConfirmPassword ? "Hide" : "Show"} confirm password
        </button>
      </div>
      <button onClick={handleSubmit}>Register</button>
    </main>
  );
}

export default FormB;
