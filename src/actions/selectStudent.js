import { SELECT_STUDENT } from "./types";
import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const selectStudent = (evaluationId) => (dispatch) => {
  request
    .get(`${baseUrl}/evaluation/${evaluationId}`)
    .then(response => dispatch({
      type: SELECT_STUDENT,
      payload: response.body
    }))
    .catch(err => alert(err))
}
