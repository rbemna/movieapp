import "./App.css";
import React, { useState } from "react";
import { movies } from "./data";
import MovieList from "./components/movieList/MovieList";
import Add from "./components/movieAdd/Add";
import { Navbar, Nav, Form } from "react-bootstrap";
import Search from "./components/movieSearch/Search";
import Rating from "./components/rating/Rating";

function App() {
  const [moviesData, setMoviesData] = useState(movies);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const handleAdd = (newMovie) => {
    setMoviesData([...movies, newMovie]);
  };
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Add handleAdd={handleAdd} />
        </Nav>
        <Form clasName="form">
          <span>
            <Rating setRating={setRating} rating={rating} />
          </span>
          <Search setSearch={setSearch} />
        </Form>
      </Navbar>
      <MovieList moviesData={moviesData} search={search} rating={rating} />
    </div>
  );
}

export default App;
