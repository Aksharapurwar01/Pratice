import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { PropTypes } from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <div className="navbar">
        <div>
          <NavLink data-testid="nav-link" className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink
            data-testid="nav-link"
            className="nav-link"
            to="/leaderboard"
          >
            Leaderboard
          </NavLink>
          <NavLink data-testid="nav-link" className="nav-link" to="/add">
            New Question
          </NavLink>
        </div>
        <div>
          <span>
            <strong>{props && props.currentUser.name}</strong>
          </span>
          <button
            type="submit"
            className="nav-link"
            onClick={(e) => props.logout(e)}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
