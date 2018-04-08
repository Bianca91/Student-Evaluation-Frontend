import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardColumns
} from "reactstrap";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StudentPicture from "../components/StudentPicture";
//import StudentForm from "../components/StudentForm";
import NavBar from "../components/NavBar";
import {
  fetchDetailedEvaluation,
  createEvaluation
} from "../actions/evaluations";
import DatePicker from "react-date-picker";
import Colors from "../components/Colors";
import EvaluationForm from "../components/EvaluationForm";

class StudentProfile extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  static propTypes = {
    detailedevaluation: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        dailyEvaluation: PropTypes.number.isRequired,
        studentName: PropTypes.string.isRequired,
        studentLastName: PropTypes.string.isRequired,
        profilePicture: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
      })
    ).isRequired
  };

  componentWillMount(props) {
    this.props.fetchDetailedEvaluation(this.props.match.params.id);
  }

  // handleChange(event) {
  //   this.setState({ review: event.target.value });
  // }

  createEvaluation = evaluation => {
    this.props.createEvaluation(evaluation);
  };

  //need to be able to change Date
  onChange = date => this.setState({ date });

  render() {
    const { detailedEvaluation } = this.props;
    if (!detailedEvaluation) return null;

    return (
      <CardColumns className="Students">
        <NavBar />
        <Card key={this.props.detailedEvaluation.id}>
          <CardBody className="Info">
            <h2 className="Title">
              {this.props.detailedEvaluation.studentName}{" "}
              {this.props.detailedEvaluation.studentLastName}
              <CardSubtitle className="Color">
                {this.props.detailedEvaluation.color}
              </CardSubtitle>
            </h2>
            <div>
              <StudentPicture
                profilePicture={this.props.detailedEvaluation.profilePicture}
              />
            </div>
          </CardBody>
        </Card>
        <EvaluationForm onSubmit={this.createEvaluation} />
      </CardColumns>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    detailedEvaluation: state.detailedEvaluation
  };
};
export default connect(mapStateToProps, {
  fetchDetailedEvaluation,
  createEvaluation
})(StudentProfile);
