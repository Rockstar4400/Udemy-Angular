import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface AppState{
  shoppingList: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    // ADD
    case ShoppingListActions.ADD_INGREDIENT: 
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    // ADD
    case ShoppingListActions.ADD_INGREDIENTS: 
    return {
      ...state,
      ingredients: [...state.ingredients, ...action.payload]
    };
    // UPDATE
    case ShoppingListActions.UPDATE_INGREDIENT: 
    const ingredient = state.ingredients[state.editedIngredientIndex];
    const updateIngredient = {
      ...ingredient,
      ...action.payload
    };
    const updateIngredients = [...state.ingredients];
    updateIngredients[state.editedIngredientIndex] = updateIngredient;

    return {
      ...state,
      ingredients: updateIngredients,
      editedIngredientIndex: -1,
      editedIngredient: null
    };
    // DELETE
    case ShoppingListActions.DELETE_INGREDIENT: 

    return {
      ...state,
      ingredients: state.ingredients.filter((ig, igIndex) => {
        return igIndex !== state.editedIngredientIndex; 
      }),
      editedIngredientIndex: -1,
      editedIngredient: null
    };
    // START
    case ShoppingListActions.START_EDIT: 

    return {
      ...state,
      editedIngredientIndex: action.payload,
      editedIngredient: {...state.ingredients[action.payload]}
    };
    // STOP
    case ShoppingListActions.STOP_EDIT: 

    return {
      ...state,
      editedIngredinet: null,
      editedIngredientIndex: -1
    };
    default:
      return state;
  }
}
