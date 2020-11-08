import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './Route/Routes';

function App() {
  return (
    <Router>
        <div className="App">
            <Routes />
        </div>
    </Router>
  );
}

export default App;
