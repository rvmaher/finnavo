import React from "react";
import "./index.css";
import Button from "../Button";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
function Navbar() {
  const { handleUser, isAuthenticated } = useAuth();
  return (
    <div className="navbarContainer">
      <div className="btnContainer">
        <NavLink to="/">Home</NavLink>
        <NavLink to="screens">Screens</NavLink>
        <NavLink to="tools">Tools</NavLink>
      </div>
      <div className="loginContainer">
        {!isAuthenticated ? (
          <>
            <Button
              onClick={(v) => {
                handleUser("r");
              }}
              btnText="Login"
            />
            <Button onClick={(v) => {}} btnText="Get Free Account" />
          </>
        ) : (
          <Button
            btnText="Logout"
            onClick={() => {
              handleUser("");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
