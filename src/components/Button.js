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

const colors = ["Red", "Yellow", "Green"];
const colorWeigth = [0.53, 0.28, 0.19];
const totalWeigth = eval(colorWeigth.join("+"));
const weighedColors = [];
let currentColor = 0;

for (let i = 0; i < colorWeigth[currentColor]; i++)
  weighedColors[weighedColors.length] = colors[currentColor];
currentColor++;

console.log(totalWeigth);
console.log(weighedColors);

const randomColor = Math.floor(Math.random() * totalWeigth);
console.log(weighedColors[randomColor]);

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
    ).isRequired,
    selectStudent: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      studentMatch: false
    };

    this.selectStudent = this.selectStudent.bind(this);
  }

  selectStudent() {
    console.log(this.state.studentMatch);
    if (this.state.studentMatch === false) {
      this.setState({ studentMatch: true });
    } else {
      this.setState({ studentMatch: false });
    }
  }
  render() {
    return (
      <div class="right">
        <button onClick={weighedColors[randomColor]}>
          <a>
            <i class="material-icons" />Ask a Quesiton
          </a>
        </button>
      </div>
    );
  }
}
