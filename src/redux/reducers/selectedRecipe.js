
import {SELECTED_RECIPE} from '../actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
  case SELECTED_RECIPE:
    return action.payload.data;
  default:
    return state;
  }
}
