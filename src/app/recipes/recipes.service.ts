import {Recipe} from "./recipe.model"
import {EventEmitter, Injectable} from "@angular/core"
import { Ingredients } from "../shared/ingredients.model";
import { ShopingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipesService{
  recipeSelected = new EventEmitter<Recipe>();
 private recipes:Recipe[]=[
     new Recipe("Dal bati","testy recipe","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/pxsvyfpssbzmjfkjpck9",[
       new Ingredients("dal",20),
       new Ingredients("aata",20)      
     ] ),
    new Recipe("Dal bati another","testy recipe","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/pxsvyfpssbzmjfkjpck9",[
       new Ingredients("dal",20),
       new Ingredients("aata",20)      
     ])];
  getRecipes(){
    return this.recipes.slice();
  }
  constructor(private shopingListService :ShopingListService) { }

  addIngredientsToShoppingList(ingredients:Ingredients[]){
      this.shopingListService.addExistingIngredients(ingredients);
  }
}
