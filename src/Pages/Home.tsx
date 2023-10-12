import React from "react";
import "./Home.css";
import Button from "../Components/Button";
import { categories } from "../constants/categories";
import { useNavigate } from "react-router-dom";
function Home() {
  console.log(import.meta.env.VITE_KEY);
  console.log(import.meta.env.VITE_DOMAIN);
  console.log(import.meta.env.VITE_PID);
  console.log(import.meta.env.VITE_BUCKET);
  console.log(import.meta.env.VITE_SENDER_ID);
  console.log(import.meta.env.VITE_APPID);
  console.log(import.meta.env.VITE_MEASUREMENT_ID);
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <img
          className="logoContainer"
          src="https://cdn-static.screener.in/img/logo-black.f44abb4998d1.svg"
        />
        <h3>Stock analysis and screening tool for investors in India.</h3>
        <div className="inputBox">
          <img src="searchIcon.png" />
          <input placeholder="Search for a company" type="text" />
        </div>
        <div className="categoryContainer">
          Or analyse :
          {categories.map((i) => (
            <Button
              key={i}
              btnText={i}
              onClick={(v) =>
                navigate(`/detail/${v}`, {
                  state: {
                    name: "tam",
                    id: "dd",
                    ssid: "dd",
                  },
                })
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
