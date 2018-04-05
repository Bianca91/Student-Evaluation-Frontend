import { FETCHED_COLORS } from '../actions/colors'

export default function(state = [], action) {
  switch (action.type) {
    case FETCHED_COLORS:
      return action.payload;
      default:
        return state;
      }
    }
