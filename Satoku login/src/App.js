import "./App.css";
import React from "react";
import Signin from "./Component/Signin";
import Register from "./Component/Register";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Notfound from "./Component/Notfound";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Signin />
            </Route>
            <Route path="/Dashboard">
              <Home />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
