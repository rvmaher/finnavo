import React from "react";
import "./index.css";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { GoogleAuthProvider, signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
function Navbar() {
  const { user } = useAuth();
  const googleProvider = new GoogleAuthProvider();

  const SignIn = async () => {
    await signInWithPopup(auth, googleProvider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="navbarContainer">
      <div className="btnContainer">
        <NavLink to="/">Home</NavLink>
        <NavLink to="screens">Screens</NavLink>
        <NavLink to="tools">Tools</NavLink>
      </div>
      <div className="loginContainer">
        {user == null ? (
          <>
            <Button onClick={SignIn} btnText="Login" />
            <Button onClick={() => {}} btnText="Get Free Account" />
          </>
        ) : (
          <Button
            btnText="Logout"
            onClick={async () => {
              await auth
                .signOut()
                .then((res) => console.log(res, "this"))
                .catch((err) => console.log(err));
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
