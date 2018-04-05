import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const FETCHED_CLASSESS = 'FETCHED_CLASSESS'
export const ADD_CLASS = 'ADD_CLASS'

export const fetchClassess = () => (dispatch) => {
  request
    .get(`${baseUrl}/classess`)
    .then(response => dispatch({
      type: FETCHED_CLASSESS,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const createClass = (cl) => (dispatch) => {
  request
    .post(`${baseUrl}/classess`)
    .send(cl)
    .then(response => dispatch({
      type: ADD_CLASS,
      payload: response.body
    }))
}
