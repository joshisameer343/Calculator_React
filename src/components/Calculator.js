import React, { useState } from "react";
import Buttons from "./Buttons";
import Input from "./Input";
import Output from "./Output";
import "./Calculator.css";

function Calculator() {
  const [inp, setInp] = useState("");
  const [oup, setOup] = useState("");

  function handleclick(event) {
    let x = event.target.value;
    console.log(x);
    console.log(typeof x);
    if (x === "=") {
      let p = inp.charAt(inp.length - 1);
      console.log(p);
      if (p === "=") {
      } else {
        setInp(inp + "=");
        setOup(eval(inp));
      }
    } else if (x === "clear") {
      setInp("");
      setOup("");
    } else if (x === "backspace") {
      setInp(inp.slice(0, -1));
    } else {
      setInp(inp + x);
    }
  }
  return (
    <div className="calc">
      <h1>Calculator</h1>
      <Input input={inp}> </Input>
      <Output output={oup}> </Output>
      <br />
      <Buttons handleclick={handleclick}></Buttons>
    </div>
  );
}

export default Calculator;
