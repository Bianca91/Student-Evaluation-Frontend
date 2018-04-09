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
import { fetchEvaluation } from "../actions/evaluations";
import Button from "../components/Button";

class StudentList extends PureComponent {
  static propTypes = {
    evaluation: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        studentName: PropTypes.string.isRequired,
        studentLastName: PropTypes.string.isRequired,
        profilePicture: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
      })
    ).isRequired
  };

  componentWillMount() {
    this.props.fetchEvaluation();
  }

  render() {
    const { evaluation } = this.props;

    return (
      <div>
        <CardColumns className="Students">
          <NavBar />
          {evaluation.map(x => (
            <Card key={x.id}>
              <CardBody className="Info">
                <CardTitle>
                  <Link to={`/evaluation/${x.id}`}>
                    {" "}
                    {x.studentName} {x.studentLastName}
                  </Link>
                </CardTitle>
                <div>
                  <Link to={`/evaluation/${x.id}`}>
                    <StudentPicture profilePicture={x.profilePicture} />
                  </Link>
                </div>
                <CardSubtitle>{x.color}</CardSubtitle>
              </CardBody>
            </Card>
          ))}
        </CardColumns>
        <Button />
        <div />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    evaluation: state.evaluation
  };
};
export default connect(mapStateToProps, { fetchEvaluation })(StudentList);
