import React from 'react';
import logo from '../assets/logo.png';
import './styles/navigation.css';

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
}

export default Nav;
