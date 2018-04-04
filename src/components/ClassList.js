import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchClassess } from "../actions/classess";

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

  render() {
    const { classess } = this.props;
    return (
      <div>
        <h1>Classes</h1>

        <table>
          <thead>
            <tr>
              <th>Batch #</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {classess.map(cl => (
              <tr key={cl.id}>
                <td>{cl.bacthNr}</td>
                <td>{cl.startDate}</td>
                <td>{cl.endDate}</td>
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
    classess: state.classess
  };
};
export default connect(mapStateToProps, { fetchClassess })(ClassList);
