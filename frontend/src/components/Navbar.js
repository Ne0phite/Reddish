import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink id="logo" to="/">
          <img alt="" src="https://i.dlpng.com/static/png/245294_thumb.png" />
        </NavLink>
        <h1>dropdown menu here </h1>
        <input id="searchbar" type="text" />
        <div className="signup-header">
          <NavLink id="login" to="/login">
            Login
          </NavLink>
          <NavLink id="sigin" to="/signup">
            Signup
          </NavLink>
        </div>
      </nav>
    </>
  );
};
