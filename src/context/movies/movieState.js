import React, { useReducer } from "react";

import movieReducer from "./movieReducer";
import movieContext from "./movieContext";

import {
  GET_POPULAR_MOVIES,
  GET_MOVIES_BY_SEARCH,
  ADD_MOVIE,
  REMOVE_MOVIE,
  GET_MOVIES_VIEWED,
  GET_MOVIES_NOT_VIEWED,
  SHOW_LOADING,
  HIDE_LOADING,
  TOGGLE_VIEWED,
} from "../../types/index";
import Axios from "axios";
import clientAxios from "../../config/axios";

const MovieState = (props) => {
  const initialState = {
    movies: [],
    error: false,
    search: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(movieReducer, initialState);

  const getMovies = async () => {
    dispatch({
      type: SHOW_LOADING,
    });
    try {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=2020&sort_by=vote_average.desc&api_key=${process.env.REACT_APP_API_KEY}`
      );
      console.log(res);
      dispatch({
        type: GET_POPULAR_MOVIES,
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: HIDE_LOADING,
    });
  };

  const getMoviesBySearch = async (search) => {
    dispatch({
      type: SHOW_LOADING,
    });
    try {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${process.env.REACT_APP_API_KEY}`
      );
      console.log(res);
      dispatch({
        type: GET_MOVIES_BY_SEARCH,
        payload: { movies: res.data.results, search: search },
      });
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: HIDE_LOADING,
    });
  };

  const addMovie = async (movie) => {
    try {
      const res = await clientAxios.post("/movies", movie);
      console.log(res);
      dispatch({
        type: ADD_MOVIE,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getMoviesNotViewed = async () => {
    try {
      const res = await clientAxios.get("/movies/not-viewed-by-user");
      console.log(res);
      dispatch({
        type: GET_MOVIES_NOT_VIEWED,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getMoviesViewed = async () => {
    try {
      const res = await clientAxios.get("/movies/viewed-by-user");
      console.log(res);
      dispatch({
        type: GET_MOVIES_VIEWED,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeMovie = async (id) => {
    try {
      await clientAxios.delete(`/movies/${id}`);
      dispatch({
        type: REMOVE_MOVIE,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const toggleViewed = async (id) => {
    try {
      const res = await clientAxios.put(`/movies/${id}`);
      console.log(res);
      dispatch({
        type: TOGGLE_VIEWED,
        payload: res.data._id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <movieContext.Provider
      value={{
        movies: state.movies,
        error: state.error,
        search: state.search,
        loading: state.loading,
        getMovies,
        getMoviesBySearch,
        addMovie,
        getMoviesNotViewed,
        getMoviesViewed,
        removeMovie,
        toggleViewed,
      }}
    >
      {props.children}
    </movieContext.Provider>
  );
};

export default MovieState;
