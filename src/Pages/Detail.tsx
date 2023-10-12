import React from "react";
import { useParams } from "react-router-dom";
import BlueButton from "../Components/BlueButton";
import { company } from "../constants/company";
import "./Detail.css";
import ProfileLoss from "../Components/ProfitLoss";
import CompoundCards from "../Components/CompoundCards";

function Detail() {
  const { id } = useParams();
  return (
    <div className="detailContainer">
      <div className="cardContainer">
        <div className="topContainer">
          <div>
            <h1>{id?.toUpperCase()}</h1>
            <p className="updatedOn">Last updated on : 08/10/2023</p>
          </div>
          <div className="btnContainer">
            <BlueButton btnText="+ Watchlist" />
            <BlueButton btnText="Buy Document" />
            <BlueButton btnText="Buy Detailed Report" />
          </div>
        </div>
        <div className="cardContainer">
          {company.map((i, idx) => (
            <div className="gridContainer" key={idx}>
              <div className={idx % 2 ? "grid grid2" : "grid"}>
                <p className="meta">{i?.key1}</p>
                <p className="info">{i?.prop1}</p>
              </div>
              <div className={idx % 2 ? "grid grid2" : "grid"}>
                <p className="meta">{i?.key2}</p>
                <p className="info">{i?.prop2}</p>
              </div>
              <div className={idx % 2 ? "grid grid2" : "grid"}>
                <p className="meta">{i?.key3}</p>
                <p className="info">{i?.prop3}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cardContainer">
        <div className="topContainer">
          <div>
            <h1>Profit & Loss</h1>
            <h3>Standalone Figures in Rs. Crores</h3>
          </div>
          <div className="btnContainer">
            <BlueButton btnText="Product Segments" />
          </div>
        </div>
        <ProfileLoss />
        <CompoundCards />
      </div>
      <div className="cardContainer">
        <div className="topContainer">
          <div>
            <h1>Quarterly Results</h1>
            <h3>Standalone Figures in Rs. Crores </h3>
          </div>
          <div className="btnContainer">
            <BlueButton btnText="Product Segments" />
          </div>
        </div>
        <ProfileLoss />
      </div>
    </div>
  );
}

export default Detail;
