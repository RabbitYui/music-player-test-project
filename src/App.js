import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import LeftMenu from "./leftMenu/leftMenu";

function App() {
  return (
    <Router>
      <div className="main-app">
        <LeftMenu/>
      </div>
    </Router>
  );
}

export default App;
