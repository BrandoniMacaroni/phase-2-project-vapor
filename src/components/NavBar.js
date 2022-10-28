import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';

function NavBar() {
  return (
    <div id="nav-bar">
      <NavLink to="/home" id="homepage">
        HOME
      </NavLink>
      <NavLink to="/games" id="your-library">
        GAMES
      </NavLink>
      <NavLink to="/add-games" id="add-games-to-library">
        +
      </NavLink>
    </div>
  );
}

export default NavBar;
