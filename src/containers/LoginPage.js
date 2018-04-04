import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { login } from "../actions/users";
import LoginForm from "../components/LoginForm";
import { Redirect } from "react-router-dom";

class LoginPage extends PureComponent {
  handleSubmit = data => {
    this.props.login(data.email, data.password);
  };

  render() {
    if (this.props.currentUser) return <Redirect to="/" />;
    console.log(this.props.currentUser);
    return (
      <div>
        <h1>Login</h1>

        <LoginForm onSubmit={this.handleSubmit} />
        { this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    currentUser: state.currentUser,
    error: state.login.error
  };
};

export default connect(mapStateToProps, { login })(LoginPage);

/*
Add the LoginPage component and add a <p> just below the form that shows the state.login.error in red if it's set.
This way we show an error if the login was not successful. Hint: first make the
state.login.error available via mapStateToProps and then retrieve it from your props in your render function.
*/
