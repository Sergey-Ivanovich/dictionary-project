import React from "react";
import DictionaryMeaning from "./DictionaryMeaning";

export default function DisplayData(props) {
  if (props.data != null) {
    console.log(props.data);
    return (
      <div className="DisplayData">
        <h2>{props.data.word}</h2>
        <hr />
        {props.data.meanings.map(function (meaning, index) {
          if (index < 1) {
            return <DictionaryMeaning data={meaning} key={index} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
