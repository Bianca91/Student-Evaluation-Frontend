import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchClassess, createClass } from "../actions/classess";
import { Link } from "react-router-dom";
import ClassForm from "./ClassForm";
import NavBar from "../components/NavBar";
import "./ClassList.css";

class ClassList extends PureComponent {
  static propTypes = {
    classess: PropTypes.arrayOf(
      PropTypes.shape({
        batchNr: PropTypes.number.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired
      })
    ).isRequired
  };

  componentWillMount() {
    this.props.fetchClassess();
  }

  createClass = cl => {
    this.props.createClass(cl);
  };

  render() {
    const { classess } = this.props;
    console.log(classess);
    return (
      <div>
        <NavBar />
        <h1>Classes</h1>
        <div className="Batch">
          <table>
            <tbody>
              {classess.map(cl => (
                <tr key={cl.id}>
                  <div className="BatchNr">
                    <td>
                      <Link to={`/students`}>
                        {`Batch # ${cl.batchNr}`}
                        <br />
                        {cl.startDate}
                        <br />
                        {cl.endDate}
                      </Link>
                    </td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h1>Add a new Class </h1>
        <ClassForm onSubmit={this.createClass} />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    classess: state.classess
  };
};
export default connect(mapStateToProps, { fetchClassess, createClass })(
  ClassList
);
