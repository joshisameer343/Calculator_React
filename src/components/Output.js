import React from "react";
import "./Calculator.css";

export default function Output(props) {
  return <input type="text" value={props.output} readOnly></input>;
}
