import { FETCHED_COLORS, SELECT_STUDENT } from "../actions/colors";

export default function(state = [], action) {
  switch (action.type) {
    case FETCHED_COLORS:
      return action.type;
    case SELECT_STUDENT:
      return [].concat(action.payload);

    default:
      return state;
  }
}
