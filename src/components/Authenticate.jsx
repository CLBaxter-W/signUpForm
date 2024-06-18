import { useState } from "react";
import axios from "axios";

export default function Authenticate({ token, setToken }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleClick = async (event) => {
    event.preventDefault();
    console.log("Hello from handleClick");
    console.log("token: ", token);

    try {
      const response = await axios.get(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      let result = response.data;
      setSuccessMessage(
        `Username: ${result.data.username} is ${result.message}`
      );
      console.log("the response: ", result);
      console.log("the username from data property: ", result.data.username);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}

      {token && (
        <button name="authenticate" type="button" onClick={handleClick}>
          Please Authenticate
        </button>
      )}
      {!token && (
        <button disabled name="authenticate" type="button">
          Not Ready to Authenticate
        </button>
      )}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}
