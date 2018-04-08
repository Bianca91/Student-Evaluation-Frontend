import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import ClassList from "./components/ClassList";
import StudentList from "./components/StudentList";
import StudentProfile from "./containers/StudentProfile";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/evaluation/:id" component={StudentProfile} />
          <Route exact path="/classess" component={ClassList} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/evaluation" component={StudentList} />
        </div>
      </Router>
    );
  }
}

export default App;
