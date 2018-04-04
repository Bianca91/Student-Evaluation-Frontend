import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./containers/LoginPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
