import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
}

export default SharedLayout;
