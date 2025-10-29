import { useState } from "react";
import "./App.css";

function App() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedUsername = credentials.username.trim();
    const trimmedPassword = credentials.password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setError("Please enter both username and password.");
      return;
    }

    console.log(`Username: ${trimmedUsername}`);
    console.log(`Password: ${trimmedPassword}`);

    setError("");
  };

  return (
    <div className="page">
      <form className="card" onSubmit={handleSubmit} noValidate>
        <h1 className="title">Login</h1>

        <label className="field">
          <span className="sr-only">Username</span>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            autoComplete="username"
          />
        </label>

        <label className="field">
          <span className="sr-only">Password</span>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
        </label>

        {error ? (
          <p className="error" role="alert">
            {error}
          </p>
        ) : null}

        <button type="submit" className="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
