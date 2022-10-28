import React from "react";
import { useParams } from "react-router-dom";

function GameShow({ games, onDeleteGame }) {
  const params = useParams();

  function handleDeleteClick() { 
    fetch(`http://localhost:3001/games/${games[params.gameId].id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteGame(games);
      });
  }

  return (
    <div>
        <div><img src={games[params.gameId].image} alt={"name"}/></div>
        <div>
          <h1>{games[params.gameId].title}</h1>
          <h3>{games[params.gameId].style}</h3>
          <h3>{games[params.gameId].pace}</h3>
          <h3>{games[params.gameId].price}</h3>
        </div>
        <button className="del-btn" onClick={handleDeleteClick}>
              -
        </button>
    </div>
  );
}

export default GameShow;