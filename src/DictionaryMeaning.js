import React from "react";

export default function DictionaryMeaning(props) {
  return (
    <div>
      <h3> {props.data.partOfSpeech}</h3>
      <h4>Definition</h4>
      <p>{props.data.definition}</p>
      <h4>Example</h4>
      <p>{props.data.example}</p>
    </div>
  );
}
