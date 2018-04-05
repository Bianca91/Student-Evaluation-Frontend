import React, { PureComponent } from "react";
import "./NavBar.css";
import { connect } from "react-redux";
import { logout } from "../actions/users";

class NavBar extends PureComponent {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <ul class="left">
        <li onClick={this.handleLogout}>
          <a href="/login">
            <i class="material-icons"></i>LogOut
          </a>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser });
export default connect(mapStateToProps, { logout })(NavBar);
