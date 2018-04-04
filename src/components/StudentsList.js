import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchStudents } from "../actions/getStudents";
import { Link } from "react-router-dom";
import StudentPicture from "../components/StudentPicture";

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
                    {student.firstName}
                  </Link>
                </td>
                <td>
                  <Link to={`/students/${student.id}`}>{student.lastName}</Link>
                </td>

                <td>
                  <Link to={`/students/${student.id}`}>
                    <StudentPicture image={student.profilePicture} />
                  </Link>
                </td>
                <td>{student.color}</td>
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
