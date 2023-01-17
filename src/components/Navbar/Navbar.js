import React from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
  return (
    <>
         <div className="nav">
            <div>
                <NavLink className='nav-link'>Home</NavLink>
                <NavLink className='nav-link' to="/leaderboard">Leaderboard</NavLink>
                <NavLink className='nav-link' to="/add">New Question</NavLink>
            </div>
            <div>
                <span>
                    <strong>name</strong>
                </span>
                <button type="submit" className="nav-link">Logout</button>
            </div>
        </div>
      
    </>
  )
}
