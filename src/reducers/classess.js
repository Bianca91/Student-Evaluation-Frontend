import { FETCHED_CLASSESS, ADD_CLASS } from "../actions/classess";

export default function(state = [], action) {
  switch (action.type) {
    case FETCHED_CLASSESS:
      return action.payload;
    case ADD_CLASS:
      return [...state, action.payload];

    default:
      return state;
  }
}
