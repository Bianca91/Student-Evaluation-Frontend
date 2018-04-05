import { FETCHED_STUDENTS } from "../actions/getStudents";
import { ADD_STUDENT} from '../actions/getStudents'

export default function(state = [], action) {
  switch (action.type) {
    case FETCHED_STUDENTS:
      return action.payload;
      case ADD_STUDENT:
    return [...state, action.payload]

    default:
      return state;
  }
}
