import { SELECT_STUDENT } from "./types";

export const selectStudent = student => ({
  type: SELECT_STUDENT,
  payload: student
});
