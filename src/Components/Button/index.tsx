import React from "react";
import "./index.css";
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
