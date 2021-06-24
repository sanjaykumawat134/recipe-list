import { Recipe } from "./recipe.model"
import { EventEmitter, Injectable } from "@angular/core"
import { Ingredients } from "../shared/ingredients.model";
import { Subject } from "rxjs";
import { Store } from "@ngrx/store"
@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe("Dal bati", "testy recipe", "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/pxsvyfpssbzmjfkjpck9", [
      new Ingredients("dal", 20),
      new Ingredients("aata", 20)
    ]),
    new Recipe("Dal bati another", "testy recipe", "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/pxsvyfpssbzmjfkjpck9", [
      new Ingredients("dal", 20),
      new Ingredients("aata", 20)
    ])];
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  setRecipes(recipes: Recipe[]) {
    // console.log("recipes before is ",this.recipes)
    this.recipes = recipes;
    // console.log("recipes is ",this.recipes)
    this.recipeChanged.next(recipes.slice());
  }
  constructor(private store: Store<any>) { }

  addRecipe(newrecipe: Recipe) {
    console.log(newrecipe)
    this.recipes.push(newrecipe);
    // console.log(this.recipes)
    this.recipeChanged.next(this.recipes.slice())
  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice())
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
