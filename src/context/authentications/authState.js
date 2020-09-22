import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import {
  REGISTER_OK,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_OK,
  LOGIN_ERROR,
  LOGOUT,
} from "../../types/index";
import clientAxios from "../../config/axios";
import tokenAuth from "../../config/token";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    authenticate: null,
    user: null,
    msg: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // ON REGISTER
  const registerUser = async (data) => {
    try {
      const res = await clientAxios.post("/users", data);
      dispatch({
        type: REGISTER_OK,
        payload: res.data,
      });
      userAuthenticate();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "error",
      };
      dispatch({
        type: REGISTER_ERROR,
        payload: alert,
      });
    }
  };

  const userAuthenticate = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const res = await clientAxios.get("/auths");
      dispatch({
        type: GET_USER,
        payload: res.data.user,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  // ON LOGIN
  const loginUser = async (data) => {
    try {
      const res = await clientAxios.post("/auths", data);
      dispatch({
        type: LOGIN_OK,
        payload: res.data,
      });
      userAuthenticate();
    } catch (error) {
      console.log(error.response);
      const alert = {
        msg: error.response.data.msg,
        category: "error",
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alert,
      });
    }
  };

  // ON LOGOUT
  const logoutUser = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticate: state.authenticate,
        user: state.user,
        msg: state.msg,
        registerUser,
        loginUser,
        userAuthenticate,
        logoutUser,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
