import React, { useContext, useEffect } from "react";
import "./Movies.css";

import MovieContext from "../../context/movies/movieContext";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import MyMovieCard from "./body/cardmymovie/MyMovieCard";

export default function Movies() {
  const movieContext = useContext(MovieContext);

  const { getMoviesNotViewed, getMoviesViewed, movies } = movieContext;

  useEffect(() => {
    getMoviesNotViewed();
  }, []); // eslint-disable-line

  const handleMyMoviesNotViewed = () => {
    getMoviesNotViewed();
  };

  const handleMyMoviesViewed = () => {
    getMoviesViewed();
  };

  return (
    <div className="main-movies">
      <div className="nav-movies">
        <button
          className="btn btn-nav-movies"
          onClick={handleMyMoviesNotViewed}
        >
          <FaEyeSlash size="1.5rem" className="to-see-icon" />
          MY MOVIES
        </button>
        <button className="btn btn-nav-movies" onClick={handleMyMoviesViewed}>
          <FaEye size="1.5rem" className="to-see-icon" />
          WATCHED
        </button>
      </div>
      <div className="my-movie-list">
        {movies.map((movie, index) => (
          <MyMovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}
