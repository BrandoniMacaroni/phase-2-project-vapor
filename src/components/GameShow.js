import React from "react";
import { useParams } from "react-router-dom";

function GameShow({ games, onDeleteGame }) {
  const params = useParams();

  return (
    <div>
        <div><img src={games[params.gameId].image} alt={"name"}/></div>
        <div>
          <h1>{games[params.gameId].title}</h1>
          <h3>{games[params.gameId].style}</h3>
          <h3>{games[params.gameId].pace}</h3>
          <h3>{games[params.gameId].price}</h3>
        </div>
    </div>
  );
}

export default GameShow;