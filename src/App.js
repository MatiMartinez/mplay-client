import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navegation from "./components/navegation/Navegation";
import AlertState from "./context/alert/alertState";
import AuthState from "./context/authentications/authState";
import tokenAuth from "./config/token";
import PrivateRoute from "./components/routes/PrivateRoute";
import Movies from "./components/movies/Movies";
import MovieState from "./context/movies/movieState";

const token = localStorage.getItem("token");

if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <div className="App">
      <AlertState>
        <AuthState>
          <MovieState>
            <BrowserRouter>
              <Navegation />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute path="/movies" component={Movies} />
              </Switch>
            </BrowserRouter>
          </MovieState>
        </AuthState>
      </AlertState>
    </div>
  );
}

export default App;
