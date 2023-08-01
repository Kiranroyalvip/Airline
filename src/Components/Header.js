import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <nav className="header">
      <h1>Airline Services</h1>
      <ul>
        <li>
          <Link to="/staff">Staff Dashboard</Link>
        </li>
        <li>
          <Link to="/admin">Admin Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
