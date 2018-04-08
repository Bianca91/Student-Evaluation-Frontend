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

  selectStudent = () => {
    console.log(this.props.evaluation.color)
    const colorRandom = ["Red", "Yellow", "Green"]
    const colorWeigth = [0.53, 0.28, 0.19];
    const totalWeight = eval(colorWeigth.join("+"));
    const weighedColors = new Array();
    var currentColor = 0;
    // push evaluation.color in new arrayOf
    // while under that arrayO
    // return student name
    while (currentColor < colorRandom.length) {
      for (let i = 0; i < colorWeigth[currentColor]; i++)
        weighedColors[weighedColors.length] = this.props.studentName.color[currentColor];
      currentColor++;
    }

    const randomStudent = Math.floor(Math.random() * totalWeight);
    document.write(weighedColors[randomStudent]);
  };

  componentWillMount() {
    this.props.fetchEvaluation();
  }

  render() {
    const { evaluation } = this.props;
    return (
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
        <button
          className="btn-floating btn-large right hoverable halfway-fab"
          onClick={this.selectStudent}
        >
          <i className="material-icons left" />Ask a Question
        </button>
      </CardColumns>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    evaluation: state.evaluation
  };
};
export default connect(mapStateToProps, { fetchEvaluation })(StudentList);
