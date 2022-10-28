import React from "react";
import { useState } from "react";

function GameForm({ onAddGame }) {
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        style: "",
        pace: "",
        price: ""
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newGame = {
            ...formData,
        };

        fetch("http://localhost:3001/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newGame),
        })
            .then((r) => r.json())
            .then(onAddGame);
    }

    return (
        <div>hi</div>
    );
}

export default GameForm;