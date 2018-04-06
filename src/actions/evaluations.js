import * as request from "superagent";
const baseUrl = "http://localhost:4000";

export const FETCHED_EVALUATIONS = "FETCHED_EVALUATIONS";
export const FETCHED_STUDENT_EVALUATION = "FETCHED_STUDENT_EVALUATION";
export const ADD_EVALUATION = "ADD_EVALUATION";
export const REMOVE_EVALUATION = "REMOVE_EVALUATION";
export const EDIT_EVALUATION = "EDIT_EVALUATION";

export const fetchEvaluations = () => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/evaluation`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: FETCHED_EVALUATIONS,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const fetchStudentEvaluation= evaluationId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;
  request
    .get(`${baseUrl}/evaluatioin/${evaluationId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: FETCHED_STUDENT_EVALUATION,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const createEvaluation = evaluation => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .post(`${baseUrl}/evaluation`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(evaluation)
    .then(response =>
      dispatch({
        type: ADD_EVALUATION,
        payload: response.body
      })
    );
};

export const deleteEvaluation = evaluationId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .delete(`${baseUrl}/evaluation/${evaluationId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: REMOVE_EVALUATION,
        payload: evaluationId
      })
    );
};

export const editEvaluation = (evaluationId, updates) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .put(`${baseUrl}/evaluation/${evaluationId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(updates)
    .then(response =>
      dispatch({
        type: EDIT_EVALUATION,
        payload: evaluationId
      })
    );
};
