import React from "react";

export default function Example(props) {
  console.log(props.data);
  if (props.data != null) {
    return (
      <div className="Example">
        <h4>Example</h4>
        <p>{props.data}</p>
      </div>
    );
  } else {
    return null;
  }
}
