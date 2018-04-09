import { SELECT_STUDENT } from "../actions/types";
import { students } from "../lib"


export default (state = students, action) => {
  switch (action.type) {
    case SELECT_STUDENT:
    return action.payload
    default:
      return state;
  }
};
