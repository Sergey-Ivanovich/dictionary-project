import React from "react";

export default function DisplayResults(props) {
  return (
    <div className="DisplayResults">
      <h2>{props.data.word}</h2>
    </div>
  );
}
