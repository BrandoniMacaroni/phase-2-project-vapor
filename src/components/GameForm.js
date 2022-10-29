import React from "react";
import { useState } from "react";
import './App.css';
import styled from 'styled-components'

const Vapor = styled.div`
    animation: disappear-title .7s linear forwards;  
`; 

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
        <div>
            <div className="form-container">
                
                <form onSubmit={handleSubmit} className="add-game-form">
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={formData.title}
                        placeholder="Enter a game's name..."
                        className="input-text"
                    />

                    <input
                        type="text"
                        name="image"
                        onChange={handleChange}
                        value={formData.image}
                        placeholder="Enter a game's image URL..."
                        className="input-text"
                    />

                    <input
                        type="text"
                        name="style"
                        onChange={handleChange}
                        value={formData.style}
                        placeholder="FPS, Strategy, etc..."
                        className="input-text"
                    />

                    <input
                        type="text"
                        name="pace"
                        onChange={handleChange}
                        value={formData.pace}
                        placeholder="Competitve, Casual, etc..."
                        className="input-text"
                    />

                    <input
                        type="text"
                        name="price"
                        onChange={handleChange}
                        value={formData.price}
                        placeholder="Price to play"
                        className="input-text"
                    />

                    <input
                        type="submit"
                        name="submit"
                        value="Create New Game"
                        className="submit"
                    />
                </form>
            </div>
        </div>
    );
}

export default GameForm;