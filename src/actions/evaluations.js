import * as request from "superagent";
const baseUrl = "http://localhost:4000";

export const FETCHED_EVALUATION = "FETCHED_EVALUATIONS";
export const FETCHED_STUDENT_EVALUATION = "FETCHED_STUDENT_EVALUATION";
export const ADD_EVALUATION = "ADD_EVALUATION";

export const fetchEvaluation = () => (dispatch, getState) => {
  //  const state = getState();
  //  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/evaluation`)
    //  .set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: FETCHED_EVALUATION,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const fetchDetailedEvaluation = evaluationId => (dispatch, getState) => {
  //  const state = getState();
  //  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/evaluation/${evaluationId}`)
    //  .set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: FETCHED_STUDENT_EVALUATION,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const createEvaluation = evaluation => dispatch => {
  request
    .post(`${baseUrl}/evaluation`)
    .send(evaluation)
    .then(response =>
      dispatch({
        type: ADD_EVALUATION,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};
