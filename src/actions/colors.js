import * as request from "superagent";

const baseUrl = "http://localhost:4000";

export const FETCHED_COLORS = "FETCHED_COLORS";

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
