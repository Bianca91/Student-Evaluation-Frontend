import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

//export const FETCHED_DETAILED_PRODUCT = 'FETCHED_DETAILED_PRODUCT'
export const FETCHED_CLASSESS = 'FETCHED_CLASSESS'

export const fetchClassess = () => (dispatch) => {
  request
    .get(`${baseUrl}/classess`)
    .then(response => dispatch({
      type: FETCHED_CLASSESS,
      payload: response.body
    }))
    .catch(err => alert(err))
}
//
// export const fetchAllProducts = () => (dispatch) => {
//   // ... implement!
//   // Hint: make sure to use json.products and not json as payload,
//   // because you send back an envelope! (so response.body.products)
// }
