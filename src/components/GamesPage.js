import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import GamesList from "./GamesList";
import GameShow from "./GameShow";
import styled from 'styled-components'
import './App.css';

const Vapor = styled.div`
    animation: disappear-title .7s linear forwards;
  `; 

function GamesPage({ games, onDeleteGame }) {
  const match = useRouteMatch();
  
  return (
    <div>
        <GamesList
          games={games}
        />
      <Route exact path={match.url}>
        <Vapor className="vapor-extra">VAPOR</Vapor>
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