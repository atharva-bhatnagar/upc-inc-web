import React from "react";
import "./Navbar.css";
import { useCookies } from "react-cookie";

const Navbar = ({ nav, isLoggedIn, setUser, setIsLoggedIn }) => {
  const [cookies, setCookies, removeCookies] = useCookies();
  const logOut = () => {
    setUser({});
    setIsLoggedIn(false);
    removeCookies("jwt");
    nav("/login");
  };
  return (
    <div className="nav">
      <h1 className="logo">UPC INC</h1>
      <div className="links">
        <p className="link" onClick={() => nav("/")}>
          Home
        </p>
        <a href="#services">
          <p className="link" onClick={() => nav("/#services")}>
            Our services
          </p>
        </a>
        <a href="#about">
          <p className="link" onClick={() => nav("/#about")}>
            About us
          </p>
        </a>
        {isLoggedIn === true && (
          <p className="link" onClick={() => nav("/profile")}>
            My Profile
          </p>
        )}

        {isLoggedIn === false && (
          <p className="link" onClick={() => nav("/register")}>
            Register
          </p>
        )}
        {isLoggedIn === false && (
          <button className="btn" onClick={() => nav("/login")}>
            Log in
          </button>
        )}
        {isLoggedIn === true && (
          <button className="btn" onClick={logOut}>
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
