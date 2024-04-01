import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function DictionaryMeaning(props) {
  return (
    <div>
      <h3> {props.data.partOfSpeech}</h3>
      <h4>Definition</h4>
      <p>{props.data.definition}</p>
      <Example data={props.data.example} />
      <Synonyms data={props.data.synonyms} />
    </div>
  );
}
