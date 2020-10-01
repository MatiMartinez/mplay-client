import React, { useContext, useEffect } from "react";
import "./Home.css";
import MovieContext from "../../context/movies/movieContext";

import MovieCard from "./cardmovie/MovieCard";

import Search from "./search/Search";
import Loading from "../utils/Loading";

export default function Home() {
  // REDUX
  const movieContext = useContext(MovieContext);
  const { movies, getMovies, search, loading } = movieContext;

  useEffect(() => {
    getMovies();
  }, []); // eslint-disable-line

  return (
    <div className="main-home">
      <Search />
      {search ? (
        <div className="title-movies">Movies "{search}"</div>
      ) : (
        <div className="title-movies">Popular</div>
      )}
      {loading ? (
        <Loading />
      ) : (
        <div className="movies-list">
          {movies &&
            movies.map((movie, index) => (
              <MovieCard key={index} movie={movie}></MovieCard>
            ))}
        </div>
      )}
    </div>
  );
}
