import React from "react";
import DictionaryMeaning from "./DictionaryMeaning";

export default function DisplayData(props) {
  if (props.data != null) {
    console.log(props.data);
    return (
      <div className="DisplayData">
        <section>
          <h2>{props.data.word}</h2>
          {props.data.phonetic}
        </section>
        {props.data.meanings.map(function (meaning, index) {
          if (index < 3) {
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
