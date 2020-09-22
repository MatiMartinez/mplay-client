import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Paids from "./components/paids/Paids";
import Navegation from "./components/navegation/Navegation";
import AlertState from "./context/alert/alertState";
import AuthState from "./context/authentications/authState";
import tokenAuth from "./config/token";

const token = localStorage.getItem("token");

if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <div className="App">
      <AuthState>
        <AlertState>
          <BrowserRouter>
            <Navegation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/paids" component={Paids} />
            </Switch>
          </BrowserRouter>
        </AlertState>
      </AuthState>
    </div>
  );
}

export default App;
