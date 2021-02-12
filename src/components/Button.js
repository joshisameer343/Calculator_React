import React from "react";
import "./Calculator.css";

export default function Button(props) {
  return (
    <button onClick={props.handleclick} value={props.value}>
      {" "}
      {props.value}{" "}
    </button>
  );
}
