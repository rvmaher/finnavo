import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import { categories } from "../constants/categories";
function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="logoContainer">
          <img src="https://cdn-static.screener.in/img/logo-black.f44abb4998d1.svg" />
        </div>
        <h3>Stock analysis and screening tool for investors in India.</h3>
        <div className="inputBox">
          <img src="searchIcon.png" />
          <input placeholder="Search for a company" type="text" />
        </div>
        <div className="categoryContainer">
          Or analyse :
          {categories.map((i) => (
            <Button key={i} btnText={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
