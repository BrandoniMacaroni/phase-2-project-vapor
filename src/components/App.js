import React, { useEffect, useState } from "react";
import { useHistory, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import GamesPage from "./GamesPage";
import GameForm from "./GameForm";
import './App.css';

function App() {
  //connecting setGames and games
  const [games, setGames] = useState([]);
  let history = useHistory();

  //pulling data from json and using setGames()
  useEffect(() => {
    fetch("http://localhost:3001/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  function handleDeleteGame(gameToDelete) {
    const updatedGames = games.filter((game) => game.id !== gameToDelete.id);
    setGames(updatedGames);
    history.push("/home");
  }

  function handleAddGame(newGame) {
    setGames([...games, newGame]);
    history.push("/games");
  }

  return (
    <div id="main">
      <NavBar />
      <Switch>
        <Route exact path="/add-games">
          <GameForm
            onAddGame={handleAddGame}
          />
        </Route>
        <Route path="/games">
          <GamesPage
            games={games}
            onDeleteGame={handleDeleteGame}
          />
        </Route>
        <Route exact path="/home">
          <div id="not-extra" className="home-title">VAPOR</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
