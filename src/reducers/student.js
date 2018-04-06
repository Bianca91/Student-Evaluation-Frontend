import { FETCHED_STUDENT_PROFILE, EDIT_STUDENT } from "../actions/getStudents";

export default function(state = [], action) {
  switch (action.type) {
    case FETCHED_STUDENT_PROFILE:
      return action.payload;
    case EDIT_STUDENT:
      if (action.payload.id === state.id) {
        return action.payload;
      } else return state;

    default:
      return state;
  }
}
