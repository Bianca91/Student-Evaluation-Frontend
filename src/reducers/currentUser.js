import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "../actions/users";

export default function(state = null, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return action.payload;
    case USER_LOGOUT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
