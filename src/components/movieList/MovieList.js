import React from "react";
import MovieCard from "../movieCard/MovieCard";
import Rating from "../rating/Rating";
import "./MovieList.css";

const MovieList = ({ moviesData, search }) => {
  return (
    <div className="moviesList">
      {moviesData
        .filter((el) => el.title.toLowerCase().includes(search))
        .map((movieCard, key) => (
          <MovieCard movieCard={movieCard} key={key} Rating={Rating} />
        ))}
    </div>
  );
};
// .filter((el) => el.name.toLowerCase().includes(search))
export default MovieList;
