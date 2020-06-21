import React from "react";
import "./App.css";
import Header from "./components/header/header.component";

import HomePage from "./pages/home/HomePage";
import SignIn from "./components/signin/signin.component";
import SignUp from "./components/signup/signup.component";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact component={SignIn} path="/signin" />
        <Route exact component={SignUp} path="/signup" />
        <Route component={HomePage} path="/" />
      </Switch>
    </div>
  );
}

export default App;
