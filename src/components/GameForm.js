import React from "react";

function GameForm({ onAddGame }) {
    fetch("http://localhost:3001/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newGame),
    })
        .then((r) => r.json())
        .then(onAddGame);

    return (
        <div>hi</div>
    );
}

export default GameForm;