import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/authentications/authContext";

export default function Register(props) {
  useEffect(() => {
    document.getElementById("nav-buttons").style.display = "none";
    return () => {
      document.getElementById("nav-buttons").style.display = "inline";
    };
  }, []);

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { registerUser, msg, authenticate } = authContext;

  useEffect(() => {
    if (authenticate === true) {
      props.history.push("/paids");
    }
    if (msg) {
      showAlert(msg.msg, msg.category);
    }
  }, [authenticate, msg, props.history]); // eslint-disable-line

  const [user, setUser] = useState({
    name: "",
    account: "",
    password: "",
  });

  const { name, account, password } = user;

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "" || account.trim() === "" || password.trim() === "") {
      showAlert("Incomplete fields", "error");
      return;
    }
    if (password.length < 6) {
      showAlert("Invalid password. Minimum length of 6", "error");
      return;
    }
    registerUser({
      name,
      account,
      password,
    });
  }

  return (
    <div className="auth">
      {alert ? (
        <div className={`alert alert-${alert.category}`}>{alert.msg}</div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="form-auth">
          <h1 className="auth-title">Sign up</h1>
          <input
            name="name"
            value={name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            className="input-auth"
          />
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
          <input type="submit" className="btn-auth" value="Register" />
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
