import React from "react";
import Button from "./Button";

export default function Buttons(props) {
  return (
    <>
      <Button value="1" handleclick={props.handleclick}></Button>
      <Button value="2" handleclick={props.handleclick}></Button>
      <Button value="3" handleclick={props.handleclick}></Button>
      <Button value="+" handleclick={props.handleclick}></Button>
      <br />
      <Button value="4" handleclick={props.handleclick}></Button>
      <Button value="5" handleclick={props.handleclick}></Button>
      <Button value="6" handleclick={props.handleclick}></Button>
      <Button value="-" handleclick={props.handleclick}></Button>
      <br />
      <Button value="7" handleclick={props.handleclick}></Button>
      <Button value="8" handleclick={props.handleclick}></Button>
      <Button value="9" handleclick={props.handleclick}></Button>
      <Button value="*" handleclick={props.handleclick}></Button>
      <br />
      <Button value="0" handleclick={props.handleclick}></Button>
      <Button value="backspace" handleclick={props.handleclick}></Button>
      <Button value="/" handleclick={props.handleclick}></Button>
      <br />
      <Button value="clear" handleclick={props.handleclick}></Button>

      <Button value="=" handleclick={props.handleclick}></Button>
    </>
  );
}
