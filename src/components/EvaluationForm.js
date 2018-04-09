import React, { PureComponent } from "react";
import DatePicker from "react-date-picker";
import { Button, ButtonGroup } from "reactstrap";

class EvaluationForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      dailyEvaluation: new Date()
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onRadioBtnClick(color) {
    this.setState({ color });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const initialValues = this.props.initialValues || {}
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="dailyEvaluation" />
        <DatePicker
          name="dailyEvaluation"
          id="dailyEvaluation"
          onChange={this.onChange}
          value={this.state.dailyEvaluation || initialValues.dailyEvaluation || ""}
        />
        <div>
          <label htmlFor="remark" />
          <textarea
            type="text"
            name="remark"
            placeholder="Remark..."
            value={this.state.remark || initialValues.remark || ""}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <ButtonGroup>
            <label htmlFor="color" />
            <Button
              color="primary"
              onClick={() => this.onRadioBtnClick("Red")}
              active={this.state.colors.color === "red"}
              value={this.state.color|| initialValues.color || ""}
            >
              Red
            </Button>
            <Button
              color="primary"
              onClick={() => this.onRadioBtnClick("Yellow")}
              active={this.state.colors.color === "yellow"}
              value={this.state.color|| initialValues.color || ""}
            >
              Yellow
            </Button>
            <Button
              color="primary"
              onClick={() => this.onRadioBtnClick("Green")}
              active={this.state.colors.color === "green"}
              value={this.state.color|| initialValues.color || ""}              
            >
              Green
            </Button>
          </ButtonGroup>
        </div>
        <br />
        <br />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default EvaluationForm;
