import React from "react";
import "./index.css";
const sales = [
  "Compounded Sales Growth",
  "Compounded Profit Growth",
  "Stock Price CAGR",
  "Return on Equity",
];
function CompoundCards() {
  return (
    <div className="profitCardContainer">
      {sales.map((i) => (
        <Card text={i} key={i} />
      ))}
    </div>
  );
}

export default CompoundCards;

const obj = {
  "10 Years": "29%",
  "5 Years": "28%",
  "3 Years": "53%",
  TTM: "-24%",
};

const Card = ({ text }: { text: string }) => {
  return (
    <div className="cardCon">
      <h4>{text}</h4>
      {Object.entries(obj).map(([k, v]) => (
        <div className="innerCon">
          <p key={k}>{k}</p>
          <p className="info">{v}</p>
        </div>
      ))}
    </div>
  );
};
