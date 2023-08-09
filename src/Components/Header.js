import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Airline Management</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/staff">Staff Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin">Admin Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
