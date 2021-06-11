import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredients.model";

export class ShopingListService{
    // ingredientWasAdded:EventEmitter<Ingredients[]> = new EventEmitter<Ingredients[]>();
    ingredientWasAdded:Subject<Ingredients[]> = new Subject<Ingredients[]>();
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
    this.ingredientWasAdded.next(this.Ingredients);
  }

  addExistingIngredients(ingredients:Ingredients[]){
    console.log(...ingredients)
    this.Ingredients.push(...ingredients);
    this.ingredientWasAdded.next(this.Ingredients.slice());
  }
}