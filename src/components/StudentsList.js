import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchStudents } from "../actions/getStudents";

class StudentsList extends PureComponent {
  static propTypes = {
    students: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        profilePicture: PropTypes.string.isRequired
      })
    ).isRequired
  };

  componentWillMount() {
    this.props.fetchStudents();
  }

  render() {
    const { students } = this.props;
    return (
      <div>
        <h1>Students</h1>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Link to Profile</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.lastName}</td>
                <td>{student.profilePicture}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    students: state.students
  };
};
export default connect(mapStateToProps, { fetchStudents })(StudentsList);
