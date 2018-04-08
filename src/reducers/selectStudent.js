import { SELECT_STUDENT } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case SELECT_STUDENT:
      return state.concat(action.payload);
    default:
      return state;
  }
};
