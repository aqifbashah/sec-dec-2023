import { useState } from "react";

function FormA() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleEmailOnChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordOnChange(event) {
    setPassword(event.target.value);
  }
  function handleConfirmPasswordOnChange(event) {
    setConfirmPassword(event.target.value);
  }
  function handleSubmit() {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const data = {
      email,
      password,
      confirmPassword,
    };
    console.log(data);
  }
  return (
    <main>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={handleEmailOnChange}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={handlePasswordOnChange}
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div className="input-container">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          value={confirmPassword}
          onChange={handleConfirmPasswordOnChange}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
        />
      </div>
      <button onClick={handleSubmit}>Register</button>
    </main>
  );
}

export default FormA;
