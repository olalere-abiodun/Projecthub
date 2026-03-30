import React from "react";

function Label(props) {
  return (
    <label className="label" style={props.style} htmlFor={props.htmlFor}>
      {props.text}
      
    </label>
  );
}

export default Label;
