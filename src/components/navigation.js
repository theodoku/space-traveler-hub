import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './styles/navigation.css';

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink className="nav-link" to="/">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/missions">
            Missions
          </NavLink>
        </li>
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
