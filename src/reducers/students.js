import { FETCHED_STUDENTS } from "../actions/getStudents";

export default function(state = [], action) {
  switch (action.type) {
    case FETCHED_STUDENTS:
      return action.payload;

    default:
      return state;
  }
}
