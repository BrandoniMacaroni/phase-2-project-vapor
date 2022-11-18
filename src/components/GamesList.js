import React from "react";
import { Link } from "react-router-dom";
import './App.css';

function GamesList({ games }) {
  console.log(Object.keys(games));
  /*creates variable 'render games'
   *maps through games
   *assigns a link to each game title
   *sets a new page extension equal to the gameID*/
  const renderGames = games.map((gameObject) => (
    <div key={gameObject.id} id="game-library">
       <Link to={`/games/${gameObject.id}`} id="game-title">
           {gameObject.title}   
       </Link>
    </div>
  ));
  //returns render games wrapped in div element  
  return <div className="master-list">{renderGames}</div>;
}

export default GamesList;