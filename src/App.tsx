import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Fedya
        </p>
        <span>v.2</span>

        <div>
          <Link to={'/privacy'}>Privacy</Link>
          <Link to={'/ddi'}>DDI</Link>
        </div>
      </header>
    </div>
  );
}

export default App;
