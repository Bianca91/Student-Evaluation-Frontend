import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { fetchColors } from "../actions/colors";
import { connect } from "react-redux";

class Colors extends Component {
  constructor(props) {
    super(props);

    this.state = { colors: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

  }
  componentWillMount() {
    this.props.fetchColors();
  }

  onRadioBtnClick(color) {
    this.setState({ color });
  }

  render() {
    return (
      <div>
        <h5>Student Progress</h5>
        <ButtonGroup>
          <Button
            color="primary"
            onClick={() => this.onRadioBtnClick("Red")}
            active={this.state.color === "red"}
          >
            Red
          </Button>
          <Button
            color="primary"
            onClick={() => this.onRadioBtnClick("Yellow")}
            active={this.state.color === "yellow"}
          >
            Yellow
          </Button>
          <Button
            color="primary"
            onClick={() => this.onRadioBtnClick("Green")}
            active={this.state.color === "green"}
          >
            Green
          </Button>
        </ButtonGroup>
        <p>Progress: {this.state.color}</p>
      </div>
    );
  }
}

export default connect(null, { fetchColors })(Colors);
