import React, { useState } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";
import "./Dictionary.css";
import Footer from "./Footer";
import DisplayPhotos from "./DisplayPhotos";

export default function Dictionary(props) {
  const [wordEntry, setWordEntry] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photo, setPhoto] = useState(null);

  function searchApi() {
    const apiKey = `oe3107c03bbf1b061844a8c3d518t9b3`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${wordEntry}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    //const photoApiKey = `oe3107c03bbf1b061844a8c3d518t9b3`;
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${wordEntry}&key=${apiKey}`;
    axios.get(photoApiUrl).then(handlePhotoResponse);
  }

  function handleResponse(response) {
    setLoaded(true);

    setResults(response.data);
  }

  function handlePhotoResponse(response) {
    setPhoto(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for "${wordEntry}" ...`);
    searchApi();
  }

  function handleChange(event) {
    setWordEntry(event.target.value);
  }

  if (loaded === true) {
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
        <DisplayPhotos data={photo} />
        <Footer />
      </div>
    );
  } else {
    searchApi();
    return <div className="buffering">Loading Page...</div>;
  }
}
