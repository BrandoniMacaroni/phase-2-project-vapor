import {  Route, Switch } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";
import GamesPage from "./GamesPage";
import GameForm from "./GameForm";


function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/add-games">
          <GameForm />
        </Route>
        <Route path="/games">
          <GamesPage />
        </Route>
        <Route exact path="/home">
          <body>
            <div>HOME</div>
          </body>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
