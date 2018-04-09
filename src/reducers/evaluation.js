import { FETCHED_EVALUATION, ADD_EVALUATION, UPDATE_EVALUATIONS } from "../actions/evaluations";

export default function(state = [], action) {
  switch (action.type) {
    case FETCHED_EVALUATION:
      return action.payload;
      case ADD_EVALUATION:
        return [...state, action.payload];
        case UPDATE_EVALUATIONS:
      return action.payload.reduce((evaluations, evaluation) => {
        evaluation[evaluation.id] = evaluation
        return evaluations
      }, {})

    default:
      return state;
  }
}
