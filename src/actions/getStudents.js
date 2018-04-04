import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'
export const FETCHED_STUDENT_PROFILE = 'FETCHED_STUDENT_PROFILE'

export const fetchStudents = () => (dispatch) => {
  request
    .get(`${baseUrl}/students`)
    .then(response => dispatch({
      type: FETCHED_STUDENTS,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchStudentProfile = (studentId) => (dispatch) => {
  request
    .get(`${baseUrl}/students/${studentId}`)
    .then(response => dispatch({
      type: FETCHED_STUDENT_PROFILE,
      payload: response.body
    }))
    .catch(err => alert(err))
}
