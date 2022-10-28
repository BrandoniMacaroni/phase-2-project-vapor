import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import GamesList from "./GamesList";
import GameShow from "./GameShow";
import './App.css';

function GamesPage({ games, onDeleteGame}) {
  const match = useRouteMatch();

  return (
    <div>
      <GamesList
        games={games}
      />
      <Route exact path={match.url}>
        < br />
        < br />
        <h3 id="choose-game">Choose a game from the list</h3>
      </Route>
      <Route path={`${match.url}/:gameId`}>
        <GameShow
          games={games}
          onDeleteGame={onDeleteGame}
        />
      </Route>
    </div>
  );
}

export default GamesPage;