import {FETCHED_CLASSESS} from '../actions/classess'

export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_CLASSESS:
      return action.payload

    default:
      return state
  }
}
