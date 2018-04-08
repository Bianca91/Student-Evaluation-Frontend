import * as request from "superagent";

const baseUrl = "http://localhost:4000";

export const FETCHED_CLASSESS = "FETCHED_CLASSESS";
export const ADD_CLASS = "ADD_CLASS";

export const fetchClassess = () => (dispatch, getState) => {
//  const state = getState();
//  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/classess`)
    //.set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: FETCHED_CLASSESS,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const createClass = cl => (dispatch, getState) => {
  // const state = getState();
  // const jwt = state.currentUser.jwt;

  request
    .post(`${baseUrl}/classess`)
    //.set("Authorization", `Bearer ${jwt}`)
    .send(cl)
    .then(response =>
      dispatch({
        type: ADD_CLASS,
        payload: response.body
      })
    );
};
