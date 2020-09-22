import React, { useContext, useEffect } from "react";
import "./Navegation.css";
import { Link } from "react-router-dom";

import AuthContext from "../../context/authentications/authContext";

export default function Navegation() {
  const authContext = useContext(AuthContext);
  const { user, userAuthenticate, logoutUser } = authContext;

  useEffect(() => {
    userAuthenticate();
  }, []);

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="brand">
          <Link to="/" className="link-unstyled">
            PAIDS
          </Link>
        </div>
        <div className="nav-buttons" id="nav-buttons">
          {user ? (
            <div className="nav-buttons">
              <h2 className="nav-username">{user.account}</h2>
              <Link to="/" className="btn-sign-in" onClick={() => logoutUser()}>
                Logout
              </Link>
            </div>
          ) : (
            <Link to="/login" className="btn-sign-in">
              Sing In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
