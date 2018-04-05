import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'
export const FETCHED_STUDENT_PROFILE = 'FETCHED_STUDENT_PROFILE'
export const ADD_STUDENT = 'ADD_STUDENT'
export const REMOVE_STUDENT = 'REMOVE_STUDENT'
export const EDIT_STUDENT = 'EDIT_STUDENT'

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

export const createStudent = (student) => (dispatch) => {
  request
    .post(`${baseUrl}/students`)
    .send(student)
    .then(response => dispatch({
      type: ADD_STUDENT,
      payload: response.body
    }))
}



export const deleteStudent = (studentId) => (dispatch) => {
  request
    .delete(`${baseUrl}/students/${studentId}`)
    .then(response => dispatch({
      type: REMOVE_STUDENT,
      payload: studentId
    }))
}


export const editStudent = (studentId, updates) => (dispatch) => {
  request
    .put(`${baseUrl}/students/${studentId}`)
    .send(updates)
    .then(response => dispatch({
      type: EDIT_STUDENT,
      payload: studentId
    }))
}
