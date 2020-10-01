import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/authentications/authContext";

export default function PrivateRoute({ component: Component, ...props }) {
  const authContext = useContext(AuthContext);
  const { authenticate, loading, userAuthenticate } = authContext;

  useEffect(() => {
    userAuthenticate();
  }, []); // eslint-disable-line

  return (
    <Route
      {...props}
      render={(props) =>
        !authenticate && !loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
