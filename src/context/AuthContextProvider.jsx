import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [login, setLogin] = useState(true);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const loginFunc = ({ username, password }) => {
    axios
      .post("https://discovered-snapdragon-zinnia.glitch.me/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        setLogin(true);
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        alert("User logged in!");
        navigate('/')
      })
      .catch((err) => alert("Could not login", err.message));
  };

  const logoutFunc = () => {
    setLogin(false);
    setToken(null);
    localStorage.removeItem("token");
    alert("User logged out");
    navigate('/login')
  };

  useEffect(() => {
    const tempToken = localStorage.getItem("token");
    if (tempToken !== null) {
      setLogin(true);
      setToken(tempToken);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, loginFunc, logoutFunc }}>
      {children}
    </AuthContext.Provider>
  );
};
