import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import GamesList from "./GamesList";
import GameShow from "./GameShow";
import styled from 'styled-components'
import './App.css';

function GamesPage({ games, onDeleteGame}) {
  const match = useRouteMatch();
  const test = "-40px"
  const Vapor = styled.div`
  text-align: center;
  width: 100%;
  margin: 0px auto;
  color: white;
  font-size: 180px;
  letter-spacing: 5px;
  top: 35%;
  position: absolute;
  margin-top: ${test};
  font-family: 'Baloo Tamma 2', cursive;
  font-weight: 800;
  text-shadow: -1px -1px 0px skyblue,
      3px 3px 0px skyblue,
      6px 6px 0px #0D47A1;
  animation: disappear-title 1s linear forwards;
`; 

  return (
    <div>
      <GamesList
        games={games}
      />
      <Route exact path={match.url}>
        <Vapor >
          VAPOR
        </Vapor>
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