import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

export const Navbar = () => {
  const { login, logoutFunc } = useContext(AuthContext)
  return (
    <nav>
      <div className="nav-elements">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/books" className="nav-link">
          Books
        </NavLink>

        {
          login == true ? 
          <button onClick={logoutFunc}>Logout</button>
          : <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
        }
        
      </div>
    </nav>
  );
};
