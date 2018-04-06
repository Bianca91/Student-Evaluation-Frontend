import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import StudentPicture from "../components/StudentPicture";
import { fetchStudentProfile, editStudent } from "../actions/getStudents";
import StudentForm from "../components/StudentForm";
import Colors from "../components/Colors";
import NavBar from "../components/NavBar";
import DatePicker from "react-date-picker";
import { createEvaluation } from "../actions/evaluations";

class StudentProfile extends PureComponent {
  state = {
    edit: false,
    review: "",
    date: new Date(),
    color: "null"
  };

  static propTypes = {
    student: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        profilePicture: PropTypes.string.isRequired,
        colors: PropTypes.string.isRequired
      })
    ).isRequired
  };

  componentWillMount(props) {
    this.props.fetchStudentProfile(this.props.match.params.id);
  }

  handleChange(event) {
    this.setState({ review: event.target.value });
  }

  handleSaveButton = () => {
    this.props.createEvaluation(this.props.colors);
  };

  handleSaveandNextButton = () => {
    this.props.updateEvaluation(this.props.colors);
    //next student
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  editStudent = student => {
    this.props.editStudent(this.props.match.params.id, student);
    this.toggleEdit();
  };

  onChange = date => this.setState({ date });

  render() {
    const { student } = this.props;
    console.log(student);
    if (!student) return null;

    return (
      <div>
        <NavBar />
        <h1>
          {student.firstName} {student.lastName}
        </h1>
        {this.state.edit && (
          <StudentForm initialValues={student} onSubmit={this.editStudent} />
        )}

        {!this.state.edit && (
          <div className="col s4">
            <Colors />
            <StudentPicture profilePicture={student.profilePicture} />
            <div>
              <textarea
                type="text"
                name="review"
                placeholder="Review"
                value={this.state.review}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div>
              <DatePicker onChange={this.onChange} value={this.state.date} />
            </div>
            <button
              className="btn-floating btn-large left hoverable halfway-fab"
              onClick={this.handleSaveButton}
            >
              <i className="material-icons left" />Save
            </button>
            <button
              className="btn-floating btn-large right hoverable halfway-fab"
              onClick={this.handlSaveandNextButton}
            >
              <i className="material-icons left" />Save & Next
            </button>
            <button
              className="btn-floating btn-large right hoverable halfway-fab"
              onClick={this.toggleEdit}
            >
              <i className="material-icons left" />Edit
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = function(state, props) {
  return {
    student: state.student
  };
};

export default connect(mapStateToProps, { fetchStudentProfile, editStudent, createEvaluation })(
  StudentProfile
);
