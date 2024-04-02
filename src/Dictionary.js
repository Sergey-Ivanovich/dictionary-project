import React, { useState } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";
import "./Dictionary.css";
import Footer from "./Footer";

export default function Dictionary() {
  const [wordEntry, setWordEntry] = useState("");
  const [results, setResults] = useState(null);

  function searchApi() {
    const apiKey = `oe3107c03bbf1b061844a8c3d518t9b3`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${wordEntry}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for "${wordEntry}" ...`);
    searchApi();
  }

  function handleChange(event) {
    setWordEntry(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="form-container">
        <h2 className="form-title">What Word Do You Want To Search Up?</h2>
        <form className="mt-5 " onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="search"
            className="border border-gray  btn search-bar text-start "
            placeholder="e.g. Plane"
          ></input>
          <input
            type="submit"
            className=" btn btn-primary submit-button"
          ></input>
        </form>
      </section>

      <DisplayData data={results} />
      <Footer />
    </div>
  );
}
