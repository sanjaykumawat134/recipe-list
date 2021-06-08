import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShopingListService{
    ingredientWasAdded:EventEmitter<Ingredients[]> = new EventEmitter<Ingredients[]>();
    Ingredients: Ingredients[] = [
    new Ingredients("Dal", 50),
    new Ingredients("tomato", 1),
  ];

  getIngredients(){
      return this.Ingredients.slice();
  }

  addIngredients(ingredients:Ingredients){
      this.Ingredients.push(ingredients);
    //   console.log(this.Ingredients)
    this.ingredientWasAdded.emit(this.Ingredients);
  }

  addExistingIngredients(ingredients:Ingredients[]){
    console.log(...ingredients)
    this.Ingredients.push(...ingredients);
    this.ingredientWasAdded.emit(this.Ingredients.slice());
  }
}