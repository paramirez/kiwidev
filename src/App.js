import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav> */}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>En construcción</code>
          </p>
          <Link className="App-link" style={{ display: "none" }} to="/about">
            About
          </Link>
          <a
            className="App-link"
            href="mailto:pablo.ramirez@kiwidev.co?Subject=Hola!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>Comunicante con nosotros</code>
          </a>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
          </Switch>

          {/* <Switch>
            <Route path="/users">
              <Users />
            </Route>
          </Switch> */}
        </header>
      </div>
    </Router>
  );
}

function About() {
  return (
    <h2>
      <code>Información adiconal</code>
    </h2>
  );
}

// function Users() {
//   return <h2>Users</h2>;
// }
