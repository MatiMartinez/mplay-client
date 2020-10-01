import React, { useContext, useEffect } from "react";
import "./Navegation.css";
import { Link } from "react-router-dom";

import AuthContext from "../../context/authentications/authContext";

export default function Navegation() {
  const authContext = useContext(AuthContext);
  const { user, userAuthenticate, logoutUser } = authContext;

  useEffect(() => {
    userAuthenticate();
  }, []); // eslint-disable-line

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="brand">
          <Link to="/" className="link-unstyled">
            MPLAY
          </Link>
        </div>
        <div className="nav-buttons" id="nav-buttons">
          {user ? (
            <div className="nav-buttons">
              <Link to="/movies" className="nav-my-movies">
                My Movies
              </Link>
              <Link to="/" className="nav-sign-in" onClick={() => logoutUser()}>
                Logout
              </Link>
            </div>
          ) : (
            <Link to="/login" className="nav-sign-in">
              Sing In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
