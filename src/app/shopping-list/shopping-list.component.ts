import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from "../shared/ingredients.model";
import { ShopingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit ,OnDestroy{
  Ingredients: Ingredients[];
  subscription :Subscription;
  constructor(private shoppingService:ShopingListService) { }

  ngOnInit(): void {
    this.Ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientWasAdded.subscribe(
     (ingredient:Ingredients[])=>{
       this.Ingredients = ingredient;
     }
    )
  }
  // addToExistingIngredients(ingredient: Ingredients) {
  //   // this.Ingredients.push(ingredient);
  //   // console.log("ingredinet is", ingredient);
  //   this.Ingredients.push(ingredient);
  //   // console.log(this.Ingredients)
  // }
  onShoppingListEdit(index:number){
    this.shoppingService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
