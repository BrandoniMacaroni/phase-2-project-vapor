import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import GamesList from "./GamesList";
import GameShow from "./GameShow";

function GamesPage({ games }) {
  const match = useRouteMatch();

  return (
    <div>
      <GamesList
        games={games}
      />
      <Route exact path={match.url}>
        < br />
        < br />
        <h3>Choose a game from the list</h3>
      </Route>
      <Route path={`${match.url}/:gameId`}>
        <GameShow
          games={games}
        />
      </Route>
    </div>
  );
}

export default GamesPage;