import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LeftMenu from "./leftMenu/leftMenu";
import Header from "./header/header";
import MainPage from "./mainPage/mainPage";
import Player from "./player/player";

function App() {
  return (
    <Router>
      <div className="main-app">
        <LeftMenu/>
        <Header/>
          <Switch>
              <Route exact path="/" component={MainPage} />
          </Switch>
          <Player />
      </div>
    </Router>
  );
}

export default App;
