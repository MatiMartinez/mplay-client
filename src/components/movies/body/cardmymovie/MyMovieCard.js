import React, { useContext } from "react";
import MovieContext from "../../../../context/movies/movieContext";
import "./MyMovieCard.css";

export default function MyMovieCard({ movie }) {
  const movieContext = useContext(MovieContext);

  const { removeMovie, toggleViewed } = movieContext;

  const handleMovie = () => {
    toggleViewed(movie._id);
  };

  const handleRemoveMovie = () => {
    removeMovie(movie._id);
  };

  return (
    <div className="main-my-movie-card" onClick={handleMovie}>
      <img src={movie.image_path} alt="my-movie" className="img-fluid" />
      <p>{movie.name}</p>
      <p className="text-score">Score: {movie.score}</p>
      <button className="btn btn-move">
        {movie.viewed ? "Unseen" : "To Watched"}
      </button>
      <button className="btn btn-delete" onClick={handleRemoveMovie}>
        Remove
      </button>
    </div>
  );
}
