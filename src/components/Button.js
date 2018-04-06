import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectStudent } from "../actions/selectedStudent";

export class NextQButton extends PureComponent {
  static propTypes = {
    selectStudent: PropTypes.func.isRequired,
    label: PropTypes.string
  };

  handleClick = () => {
    this.props.selectStudent();
  };

  render() {
    console.log(selectStudent)
    return (
      <button onClick={this.handleClick} className="selectStudent">
        {this.props.label || "New Student"}
      </button>
    );
  }
}

export default connect(null, { selectStudent })(NextQButton);
