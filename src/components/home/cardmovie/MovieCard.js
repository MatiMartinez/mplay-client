import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import MovieContext from "../../../context/movies/movieContext";
import "./MovieCard.css";

import AuthContext from "../../../context/authentications/authContext";

function MovieCard(props) {
  const authContext = useContext(AuthContext);

  const { authenticate } = authContext;

  const movieContext = useContext(MovieContext);

  const { addMovie } = movieContext;

  const { movie } = props;

  const handleMovie = () => {
    if (!authenticate) {
      props.history.push("/login");
    } else {
      addMovie({
        name: movie.title,
        image_path: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        score: movie.vote_average,
      });
    }
  };

  return (
    <div className="main-movie-card" id="main-movie-card" onClick={handleMovie}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="movie"
        className="img-fluid"
        id="img-movie"
      />
      <div className="overlay-text">
        <div className="text-add-movie">Add Movie</div>
      </div>
      <p>{movie.title}</p>
    </div>
  );
}

export default withRouter(MovieCard);
