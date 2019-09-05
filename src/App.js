import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import LeftMenu from "./leftMenu/leftMenu";
import Header from "./header/header";

function App() {
  return (
    <Router>
      <div className="main-app">
        <LeftMenu/>
        <Header/>
      </div>
    </Router>
  );
}

export default App;
