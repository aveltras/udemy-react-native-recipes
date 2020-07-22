import axios from 'axios';
import {fetchRecipesAction, fetchSelectedRecipeAction} from '../redux/actions';

const apiKey = ""; // https://spoonacular.com/food-api/console#Profile
const NUM_PER_PAGE = 10;

export const fetchRecipes = async (dispatch, query = "") => {
  try {
    const res = await axios.get("https://api.spoonacular.com/recipes/search", {
      params: {
        apiKey,
        number: NUM_PER_PAGE,
      },
    });

    console.log(res.data.results);
    
    dispatch(fetchRecipesAction(res.data.results));
  } catch (e) {
    console.log("error", e);
  }
};

export const fetchSelectedRecipe = async (dispatch, id) => {
  try {
    const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: {
        apiKey,
      },
    });

    // console.log(res.data.title);
    
    dispatch(fetchSelectedRecipeAction(res.data));
  } catch (e) {
    console.log("error", e);
  }
};
