import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import './App.css';

import Home from "./components/home";

function App() {
    return (
    <div className="App">
        <Router>
            <header className="header">
                <a href="/" className="logo">
                    <img src="images/logo-trans.png" alt="" />
                </a>
            </header>

            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
