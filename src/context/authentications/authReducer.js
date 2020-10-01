import {
  REGISTER_OK,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_OK,
  LOGIN_ERROR,
  LOGOUT,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_OK:
    case LOGIN_OK:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authenticate: true,
        msg: null,
        loading: false,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        authenticate: null,
        msg: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        authenticate: true,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
