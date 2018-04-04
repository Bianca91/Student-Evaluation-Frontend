import {FETCHED_STUDENT_PROFILE} from '../actions/getStudents'

export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_STUDENT_PROFILE:
      return action.payload

    default:
      return state
  }
}
