import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-elements">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/books" className="nav-link">
          Books
        </NavLink>
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      </div>
    </nav>
  );
};
