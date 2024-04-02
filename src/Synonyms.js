import React from "react";

export default function Synonymes(props) {
  if (props.data != null) {
    return (
      <div className="Synonymes">
        <h4>Synonyms</h4>
        <ul>
          {props.data.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  }
}
