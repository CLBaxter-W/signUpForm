import { useState } from "react";
import "./App.css";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import "./components/Component.css";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div className="windowDiv">
        <div className="headerDiv">
          <h3>Create and Authenticate User</h3>
        </div>

        <div className="signupDiv">
          <SignUpForm token={token} setToken={setToken} />
        </div>
        <hr></hr>
        
        <div className="authenticateDiv">
          <Authenticate token={token} setToken={setToken} />
        </div>
      </div>
    </>
  );
}

export default App;
