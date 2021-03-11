import React from "react";

import "./Movie.css";

const movie = (props) => {
  return (
    <div className="movie">
      <h3 className="movie-title">{props.Title}</h3>
      <button
        className="movie-delete"
        onClick={() => props.deleteHandler(props.index)}
      >
        X
      </button>
      <p>Released on: {props.Release_Date}</p>
      {props.Major_Genre && <p>Genre: {props.Major_Genre}</p>}
    </div>
  );
};

export default movie;
