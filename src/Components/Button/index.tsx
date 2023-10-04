import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
function Button({
  btnText,
  onClick,
}: {
  btnText: string;
  onClick: (text: string) => void;
}) {
  return <button onClick={() => onClick(btnText)}>{btnText}</button>;
}

export default Button;
