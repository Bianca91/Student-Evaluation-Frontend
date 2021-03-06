import * as request from "superagent";

const baseUrl = "http://localhost:4000";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const UPDATE_USER = "UPDATE_USER";
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS'

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/logins`)
    .send({ email, password })
    .then(result => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result.body
      });
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_LOGIN_FAILED,
          payload: err.response.body.message || "Unknown error"
        });
      } else {
        console.error(err);
      }
    });
};

export const getUsers = () => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/users`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: UPDATE_USER,
        payload: result.body
      });
    })
    .catch(err => console.error(err));
};

export const logout = () => {
      return {
        type: USER_LOGOUT_SUCCESS,
        payload: null
      }
    }
