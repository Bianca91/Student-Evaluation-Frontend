import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class StudentPicture extends PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired
  };

  render() {

    return <div><img className="student" src={this.props.image} width="192" height="120" /></div>
  }
}
export default StudentPicture
