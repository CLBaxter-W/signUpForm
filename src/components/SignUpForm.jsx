import { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Hello from handleSubmit");
    console.log("username: ", username);
    console.log("password: ", password);

    
  };

  return (
    <div>
      <h2>I am Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            User Name:{""}
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
          </label>
          <br />

          <label>
            Password:{""}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
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
