import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>En construcción</code>
        </p>
        <a
          className="App-link"
          href="mailto:pablo.ramirez@kiwidev.co?Subject=Hola!"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contacto
        </a>
      </header>
    </div>
  );
}

export default App;
