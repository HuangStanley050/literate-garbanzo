import React, { useEffect } from "react";
import logo from "./logo.svg";

function App() {
  useEffect(() => {
    console.log(window.location.search);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="/auth/google" rel="noopener noreferrer">
          Login with Google
        </a>
      </header>
    </div>
  );
}

export default App;
