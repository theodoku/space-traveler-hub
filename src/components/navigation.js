import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './styles/navigation.css';

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>Space Travelers Hub</p>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink className="nav-link" to="/">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/Missions">
            Missions
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink className="nav-link" to="/profile">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
