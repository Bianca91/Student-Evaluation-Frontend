import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import StudentPicture from "../components/StudentPicture";
import { fetchStudentProfile } from "../actions/getStudents";

class StudentProfile extends PureComponent {
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

  render() {
    const { student } = this.props;
    
    console.log(student);
    return (
      <div>
        <h1>{this.props.firstName}</h1>
        <div class="col s4">
          <div class="card">
            <div class="card-image">
              <StudentPicture image={this.props.profilePicture} />
              <button
                class="btn-floating btn-large left hoverable halfway-fab"
                onClick={this.handleDislikeButton}
              >
                <i class="material-icons left" />Delete Student
              </button>
              <button
                className="btn-floating btn-large right hoverable halfway-fab"
                onClick={this.handleLikeButton}
              >
                <i class="material-icons left" />Update Student Profile
              </button>
            </div>
            <div class="card-content" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state, props) {
  return {
    student: state.student
  };
};

export default connect(mapStateToProps, { fetchStudentProfile })(
  StudentProfile
);
