import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'

export const fetchStudents = () => (dispatch) => {
  request
    .get(`${baseUrl}/students`)
    .then(response => dispatch({
      type: FETCHED_STUDENTS,
      payload: response.body
    }))
    .catch(err => alert(err))
}
