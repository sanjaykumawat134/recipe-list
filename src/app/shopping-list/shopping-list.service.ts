import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredients.model";

export class ShopingListService{
    // ingredientWasAdded:EventEmitter<Ingredients[]> = new EventEmitter<Ingredients[]>();
    ingredientWasAdded:Subject<Ingredients[]> = new Subject<Ingredients[]>();
    startedEditing = new Subject<number>();
     private ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomatoes', 10),
  ];
  getIngredients(){
      return this.ingredients.slice();
  }

  addIngredients(ingredients:Ingredients){
      this.ingredients.push(ingredients);
    //   console.log(this.Ingredients)
    this.ingredientWasAdded.next(this.ingredients);
  }

  addExistingIngredients(ingredients:Ingredients[]){
    console.log(...ingredients)
    this.ingredients.push(...ingredients);
    this.ingredientWasAdded.next(this.ingredients.slice());
  }

  getIngredient(index:number):Ingredients{
   return this.ingredients[index];
  }

  updateExistingIngredient(index :number ,ingredient :Ingredients){
    this.ingredients[index]=ingredient;
    this.ingredientWasAdded.next(this.ingredients.slice());
  }

 deleteIngredient(index :number):void{
  this.ingredients.splice(index, 1);
  this.ingredientWasAdded.next(this.ingredients)  
  }
}