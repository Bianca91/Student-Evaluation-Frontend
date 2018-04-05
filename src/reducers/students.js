import {
  FETCHED_STUDENTS,
  ADD_STUDENT,
  REMOVE_STUDENT,
  EDIT_STUDENT
} from "../actions/getStudents";

export default function(state = [], action) {
  switch (action.type) {
    case FETCHED_STUDENTS:
      return action.payload;
    case ADD_STUDENT:
      return [...state, action.payload];

    case REMOVE_STUDENT:
      return state.filter(student => student.id !== action.payload);
    default:
      return state;

    case EDIT_STUDENT:
      return state.map(students => {
        if (action.payload.id !== state.id) {
          return students;
        }
      });
  }
}
