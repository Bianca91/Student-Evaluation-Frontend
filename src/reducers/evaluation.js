import {
  FETCHED_EVALUATIONS,
  ADD_EVALUATION,
  REMOVE_EVALUATION,
  EDIT_EVALUATION
} from "../actions/evaluations";

export default function(state = [], action) {
  switch (action.type) {
    case FETCHED_EVALUATIONS:
      return action.payload;
    case ADD_EVALUATION:
      return [...state, action.payload];

    case REMOVE_EVALUATION:
      return state.filter(evaluation => evaluation.id !== action.payload);
    default:
      return state;

    case EDIT_EVALUATION:
      return state.map(evaluation => {
        if (action.payload.id !== state.id) {
          return evaluation;
        }
      });
  }
}
