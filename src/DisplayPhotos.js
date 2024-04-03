import React from "react";
import "./DisplayPhotos.css";

export default function DisplayPhotos(props) {
  if (props.data) {
    return (
      <section className="DisplayPhotos">
        <div className="row">
          {props.data.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    className="img-fluid"
                    src={photo.src.landscape}
                    alt={`describing text by ${photo}`}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
