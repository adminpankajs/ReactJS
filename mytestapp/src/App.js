import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from './components/homepage.component';
import CoverFlow from './components/coverflow.componenet';
function App() {
  return (
    <Router>
      <Route path="/" exact component = { HomePage } />
      <Route path="/coverflow" component = { CoverFlow } />
    </Router>
  );
}

export default App;
