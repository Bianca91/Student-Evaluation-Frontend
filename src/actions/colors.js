import * as request from "superagent";
import {nextStudent} from "../lab"

const baseUrl = "http://localhost:4000";

export const FETCHED_COLORS = "FETCHED_COLORS";
export const SELECT_STUDENT = 'SELECT_STUDENT'

export const fetchColors = () => dispatch => {
  request
    .get(`${baseUrl}/colors`)
    .then(response =>
      dispatch({
        type: FETCHED_COLORS,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const selectStudent = () => {
  const student = nextStudent
  return {
    type: "SELECT_STUDENT",
    payload: {
      student
    }
  }
}
