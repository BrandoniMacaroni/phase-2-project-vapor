import {  Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import React from "react";
import NavBar from "./NavBar";
import GamesPage from "./GamesPage";
import GameForm from "./GameForm";

function App() {
  //connecting setGames and games
  const [games, setGames] = useState([]);

  //pulling data from json and using setGames()
  useEffect(() => {
    fetch("http://localhost:3001/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/add-games">
          <GameForm />
        </Route>
        <Route path="/games">
          <GamesPage 
            games={games}
          />
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
