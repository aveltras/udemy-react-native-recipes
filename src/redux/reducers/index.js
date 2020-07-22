import {combineReducers} from 'redux';
import recipes from './recipes';
import selectedRecipe from './selectedRecipe';

export default combineReducers({
  recipes,
  selectedRecipe
});
