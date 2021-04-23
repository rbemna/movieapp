import React from "react";
import Rating from "../rating/Rating";
import "./MovieCard.css";

const MovieCard = ({ movieCard }) => {
  return (
    <div className="movie">
      <div className="img_section">
        <img src={movieCard.URL} alt="movie" />
      </div>

      <div className="info_section">
        <div className="movie_header">
          <div className="movie_top">
            <h1>{movieCard.title}</h1>
            {/* <p className="type">{Rating}</p> */}
            <Rating />
          </div>

          <h4>
            {movieCard.date},{" "}
            <span className="minutes">{movieCard.duration}</span>
          </h4>
        </div>
        <div className="movie_desc">
          <p className="text">{movieCard.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
