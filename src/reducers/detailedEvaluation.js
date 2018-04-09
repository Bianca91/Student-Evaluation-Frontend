import {FETCHED_STUDENT_EVALUATION, UPDATE_EVALUATION} from '../actions/evaluations'

export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_STUDENT_EVALUATION:
      return action.payload
      case UPDATE_EVALUATION:
        if (action.payload.id === state.id) {
          return action.payload
        }
        else return state
    default:
      return state
  }
}
