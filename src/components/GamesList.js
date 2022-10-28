import React from "react";
import { Link } from "react-router-dom";
import './App.css';

function GamesList({ games }) {
  /*creates variable 'render games'
   *maps through games
   *assigns a link to each game title
   *sets a new page extension equal to the gameID*/
  const renderGames = Object.keys(games).map((gameID) => (
    <div key={gameID} id="game-library">
      <Link to={`/games/${gameID}`} id="game-title">
          {games[gameID].title}   
      </Link>
    </div>
  ));
  //returns render games wrapped in div element  
  return <div className="master-list">{renderGames}</div>;
}

export default GamesList;