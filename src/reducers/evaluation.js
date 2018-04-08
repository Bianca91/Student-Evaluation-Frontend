import { FETCHED_EVALUATION, ADD_EVALUATION } from "../actions/evaluations";

export default function(state = [], action) {
  switch (action.type) {
    case FETCHED_EVALUATION:
      return action.payload;
      case ADD_EVALUATION:
        return [...state, action.payload];
    default:
      return state;
  }
}
