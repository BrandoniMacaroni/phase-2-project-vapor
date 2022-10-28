import {  Route, Switch } from "react-router-dom";
import { useHistory, Route, Switch } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";
import GamesPage from "./GamesPage";
import GameForm from "./GameForm";

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
    history.push("/games");
    window.location.reload();
  }

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
            onDeleteGame={handleDeleteGame}
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
