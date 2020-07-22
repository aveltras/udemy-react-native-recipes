
import {ADD_RECIPES} from '../actionTypes';

export default (state = [], action) => {
  switch  (action.type) {
  case ADD_RECIPES:
    return action.payload.data;
  default:
    return state;
  }
}
