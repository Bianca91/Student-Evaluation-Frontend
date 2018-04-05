import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class StudentPicture extends PureComponent {
  static propTypes = {
    profilePicture: PropTypes.string.isRequired
  };

  render() {

    return <div><img className="student" src={this.props.profilePicture} width="192" height="120" /></div>
  }
}
export default StudentPicture
