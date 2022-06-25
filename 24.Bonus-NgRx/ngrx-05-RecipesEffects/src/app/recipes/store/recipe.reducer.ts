import { Recipe } from "../recipe.model";

export interface State {
    recipes: Recipe[];
}

const intialState: State = {
    recipes: []
}

export function recipeReducer (state, action){
    return state;
}