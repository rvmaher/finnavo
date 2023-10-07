import React from "react";
import "./index.css";

type Props = {
  btnText: string;
  onPress?: () => {};
};

const BlueButton: React.FC<Props> = ({ btnText, onPress }) => {
  return <button className="button">{btnText}</button>;
};

export default BlueButton;
