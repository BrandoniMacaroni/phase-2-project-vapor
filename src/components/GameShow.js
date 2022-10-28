import React from "react";
import { useParams } from "react-router-dom";
import './App.css';

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
      <div id="bg-image-container">
        <div className="bg-image"><img src={games[params.gameId].image} alt={"name"} className="game-avatar" /></div>
      </div>
      <div id="bg-text-container">
        <div className="bg-text">
          <h1>{games[params.gameId].title}</h1>
          <h3>{games[params.gameId].style}</h3>
          <h3>{games[params.gameId].pace}</h3>
          <h3>{games[params.gameId].price}</h3>
        </div>
      </div>
      <button className="del-btn" onClick={handleDeleteClick}>
              -
          </button>
    </div>
  );
}

export default GameShow;