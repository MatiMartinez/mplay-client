import React, { useContext, useState } from "react";
import "./Search.css";
import MovieContext from "../../../context/movies/movieContext";

export default function Search() {
  const movieContext = useContext(MovieContext);
  const { getMoviesBySearch } = movieContext;

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search === "") {
      return;
    }
    getMoviesBySearch(search);
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Search..."
          className="input-search"
        />
        <button className="btn btn-search" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
