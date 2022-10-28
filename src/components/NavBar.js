import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div id="nav-bar">
      <NavLink to="/home">
        HOME
      </NavLink>
      <NavLink to="/games">
        GAMES
      </NavLink>
      <NavLink to="/add-games">
        +
      </NavLink>
    </div>
  );
}

export default NavBar;