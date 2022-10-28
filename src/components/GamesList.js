import React from "react";
import { Link } from "react-router-dom";

function GamesList({ games }) {
  const renderGames = Object.keys(games).map((gameID) => (
    
    <div key={gameID}>
      <Link to={`/games/${gameID}`}>
          {games[gameID].title}   
      </Link>
    </div>
  ));

  return <div>{renderGames}</div>;
}

export default GamesList;