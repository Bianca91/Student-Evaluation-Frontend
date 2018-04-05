import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchColors } from '../actions/colors'

class Colors extends PureComponent {
  static propTypes = {
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        red: PropTypes.string.isRequired,
        yellow: PropTypes.string.isRequired,
        green: PropTypes.string.isRequired
      })
    ).isRequired
  };


  componentWillMount() {
    this.props.fetchColors();
  }

  render() {
    const { colors } = this.props;
    console.log(colors);
    return (
      <div>
        <h1>Student Progress</h1>

        <table>
          <tbody>
            {colors.map(color => (
              <tr key={color.id}>
                <td>{color.red}</td>
                <td>{color.yellow} </td>
                <td>{color.green}</td>
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
    colors: state.colors
  };
};
export default connect(mapStateToProps, { fetchColors})(Colors);
