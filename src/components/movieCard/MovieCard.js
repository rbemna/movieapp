import React from "react";
import "./MovieCard.css";
import { FaStar } from "react-icons/fa";

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
            <span>
              {[...Array(5)].map((star, i) => {
                return i + 1 <= movieCard.rating ? (
                  <FaStar key={i + 1} color={"#ffc107"} size={25} />
                ) : (
                  <FaStar key={i + 1} color={"#e4e5e9"} size={25} />
                );
              })}
            </span>
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
