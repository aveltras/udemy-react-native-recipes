import {combineReducers} from 'redux';
import recipes from './recipes';
import selectedRecipe from './selectedRecipe';
import taskList from './taskList';

export default combineReducers({
  recipes,
  selectedRecipe,
  taskList,
});
