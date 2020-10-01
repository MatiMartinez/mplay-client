import React, { useState, useEffect, useContext } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/authentications/authContext";

export default function Login(props) {
  useEffect(() => {
    document.getElementById("nav-buttons").style.display = "none";
    return () => {
      document.getElementById("nav-buttons").style.display = "inline";
    };
  }, []);

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { loginUser, msg, authenticate } = authContext;

  useEffect(() => {
    if (authenticate === true) {
      props.history.push("/movies");
    }
    if (msg) {
      showAlert(msg.msg, msg.category);
    }
  }, [authenticate, msg, props.history]); // eslint-disable-line

  const [user, setUser] = useState({
    account: "",
    password: "",
  });
  const { account, password } = user;

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (account.trim() === "" || password.trim() === "") {
      showAlert("Incomplete fields", "error");
      return;
    }
    loginUser({ account, password });
  }

  return (
    <div className="auth">
      {alert ? (
        <div className={`alert alert-${alert.category}`}>{alert.msg}</div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="form-auth">
          <h1 className="auth-title">Sign in</h1>
          <input
            name="account"
            value={account}
            onChange={handleChange}
            type="text"
            placeholder="Account"
            className="input-auth"
          />
          <input
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="input-auth"
          />
          <input type="submit" className="btn-auth" value="Login" />
          <Link to="/register" className="auth-link">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
