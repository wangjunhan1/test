import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <ul>
      <li>
        <span className="hex"><span className="hexIn"></span></span>
      </li>
      <li>
        <span className="hex1"><span className="hexIn1"></span></span>
      </li>
    </ul>
  );
}

export default App;
