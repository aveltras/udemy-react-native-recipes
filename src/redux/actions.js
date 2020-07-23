
import {ADD_TASK, TOGGLE_TASK, DELETE_TASK,ADD_RECIPES, SELECTED_RECIPE} from './actionTypes';

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: new Date().getTime(),
    title,
    completed: false,
  }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
});


export const fetchRecipesAction = (data) => ({
  type: ADD_RECIPES,
  payload: {
    data
  },
});

export const fetchSelectedRecipeAction = (data) => ({
  type: SELECTED_RECIPE,
  payload: {
    data
  },
});
