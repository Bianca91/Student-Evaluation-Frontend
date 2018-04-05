import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchStudents,
  createStudent,
  deleteStudent
} from "../actions/getStudents";
import { Link } from "react-router-dom";
import StudentPicture from "../components/StudentPicture";
import StudentForm from "../components/StudentForm";

class StudentsList extends PureComponent {
  static propTypes = {
    students: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        profilePicture: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
      })
    ).isRequired
  };

  componentWillMount() {
    this.props.fetchStudents();
  }

  createStudent = student => {
    this.props.createStudent(student);
  };

  deleteStudent = studentId => {
    this.props.deleteStudent(studentId);
  };

  render() {
    const { students } = this.props;
    console.log(students.profilePicture);
    return (
      <div>
        <h1>Students</h1>

        <table>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>
                  <Link to={`/students/${student.id}`}>
                    {student.firstName} {student.lastName}
                  </Link>
                </td>
                <td>
                  <Link to={`/students/${student.id}`}>
                    <StudentPicture profilePicture={student.profilePicture} />
                  </Link>
                </td>
                <td>{student.color}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1>Add a new Student</h1>
        <StudentForm onSubmit={this.createStudent} />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    students: state.students
  };
};
export default connect(mapStateToProps, {
  fetchStudents,
  createStudent,
  deleteStudent
})(StudentsList);
