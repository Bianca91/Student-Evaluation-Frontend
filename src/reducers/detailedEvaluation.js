import {FETCHED_STUDENT_EVALUATION} from '../actions/evaluations'

export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_STUDENT_EVALUATION:
      return action.payload

    default:
      return state
  }
}
