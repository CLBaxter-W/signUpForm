import { useState } from "react";
import axios from "axios";

export default function SignUpForm({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Hello from handleSubmit");
    console.log("username: ", username);
    console.log("password: ", password);

    try {
      const response = await axios.post(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          username: username,
          password: password,
        }
      );

      setToken(response.data.token);
      console.log("the response: ", response);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      <h4>Please create a username and password.</h4>
      <h6>
        username and password must be at least 5 characters and no more than 10
      </h6>
      <h6>Both fields are required - Thank you!</h6>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            User Name:
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              required
              minLength="5"
            />
          </label>
          <br />

          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
              minLength="5"
              maxLength="10"
            />
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
