import React from "react";
import "./Calculator.css";

export default function Input(props) {
  return <input type="text" value={props.input} readOnly></input>;
}
