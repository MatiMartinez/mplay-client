import {
  GET_POPULAR_MOVIES,
  GET_MOVIES_BY_SEARCH,
  ADD_MOVIE,
  GET_MOVIES_VIEWED,
  GET_MOVIES_NOT_VIEWED,
  SHOW_LOADING,
  HIDE_LOADING,
  REMOVE_MOVIE,
  TOGGLE_VIEWED,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload,
        search: null,
      };
    case GET_MOVIES_BY_SEARCH:
      return {
        ...state,
        movies: action.payload.movies,
        search: action.payload.search,
      };
    case SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case GET_MOVIES_VIEWED:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_MOVIES_NOT_VIEWED:
      return {
        ...state,
        movies: action.payload,
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
      };
    case TOGGLE_VIEWED:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
      };
    default:
      return state;
  }
};
