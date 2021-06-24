
import { Ingredients } from "../../shared/ingredients.model";
import * as ShoppingListActions from './shopping-list.actions'

export interface ShoppingListState {
    ingredients: Ingredients[];
    editedIngredientIndex: number,
    editedIngredient: Ingredients
}

const intialState: ShoppingListState = {
    ingredients: [
        new Ingredients('Apples', 5),
        new Ingredients('Tomatoes', 10)
    ],
    editedIngredientIndex: -1,
    editedIngredient: null,
}
export function shoppingListReducer(state = intialState, action: ShoppingListActions.ShoppingListActions): ShoppingListState {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    action.payload
                ],
                editedIngredientIndex: -1,
                editedIngredient: null,
            }
        case ShoppingListActions.ADD_INGRDIENTS:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    ...action.payload
                ],
                editedIngredientIndex: -1,
                editedIngredient: null,
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const oldingredient = state.ingredients[state.editedIngredientIndex];
            const updatedgredient = {
                ...oldingredient,
                ...action.payload.ingredient
            }
            let ingredients = [...state.ingredients]
            ingredients[state.editedIngredientIndex] = updatedgredient
            return {
                ...state,
                ingredients: ingredients,
                editedIngredientIndex: -1,
                editedIngredient: null,
            }

        case ShoppingListActions.DELETE_INGREDIENT:
            let ingredientsArr = [...state.ingredients];
            ingredientsArr.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                ingredients: ingredientsArr
            }
        case ShoppingListActions.START_EDIT:
            const editedIngredient = { ...state.ingredients[action.payload] }
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            }
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            }

        default:
            return state;
    }
}