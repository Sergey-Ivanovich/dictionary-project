import React, { useState } from "react";

export default function Dictionary() {
  const [wordEntry, setWordEntry] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for "${wordEntry}" ...`);
  }

  function handleChange(event) {
    setWordEntry(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="mt-5" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="search"
          className="border border-gray me-2 btn searchBar text-start"
          placeholder="e.g. Plane"
        ></input>
        <input type="submit" className="ms-2 btn btn-primary"></input>
      </form>
    </div>
  );
}
