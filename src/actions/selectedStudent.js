import * as request from "superagent";

const baseUrl = "http://localhost:4000";

//need endpoint for randomStudent get =
export const SELECT_STUDENT = "SELECT_STUDENT";
export const selectStudent = (studentId, updates) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;
  //  const studentId = nextStudent

  request
    .get(`${baseUrl}/randomStudent/${studentId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(updates)
    .then(response =>
      dispatch({
        type: SELECT_STUDENT,
        payload: studentId
      })
    );
};
