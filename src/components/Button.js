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
import { selectStudent } from "../actions/selectStudent";
import { students } from "../lib";
import { Prompt } from "react-router";

const colors = ["Red", "Yellow", "Green"];
const colorWeigth = [0.53, 0.28, 0.19];
const totalWeigth = eval(colorWeigth.join("+"));
const weighedColors = [];
let currentColor = 0;

while (currentColor < colors.length) {
  for (let i = 0; i < colorWeigth[currentColor]; i++)
    weighedColors[weighedColors.length] = colors[currentColor];
  currentColor++;
}
console.log(totalWeigth);
console.log(weighedColors);

const randomColor = Math.floor(Math.random() * totalWeigth);
console.log(weighedColors[randomColor]);

class StudentList extends PureComponent {
  static propTypes = {
    evaluations: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        studentName: PropTypes.string.isRequired,
        studentLastName: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
      })
    ).isRequired
  };

  componentWillMount() {
      this.props.selectStudent()
    }

  student() {
    const studentName = students.filter(
      student => student.color === weighedColors[randomColor]
    );
    const randomStudent = Math.floor(Math.random() * studentName.length);
    if (studentName.lentgh > 2)

    console.log(studentName);

    alert(JSON.stringify(studentName[0]));
    console.log(studentName);
  }
  render() {
    if (!students) return null

    return (
      <div class="right">
        <button onClick={this.student}>
          <a>
            <i class="material-icons" />Ask a Quesiton
          </a>
        </button>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    evaluations: state.evaluation
  };
};

export default connect(mapStateToProps, { selectStudent })(StudentList);
