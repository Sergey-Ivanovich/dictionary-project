import React from "react";

export default function DictionaryMeaning(props) {
  return (
    <div className="DictionaryMeaning rounded border border-gray mb-5 p-1">
      <h3 className="bg-warning-subtle rounded"> {props.data.partOfSpeech}</h3>
      <h4 className="bg-primary-subtle rounded">Definition</h4>
      <p className="bg-light rounded">{props.data.definition}</p>
      <h4 className="bg-primary-subtle rounded">Example</h4>
      <p className="bg-light rounded">{props.data.example}</p>
    </div>
  );
}
