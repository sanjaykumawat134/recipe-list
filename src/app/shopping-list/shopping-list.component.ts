import { Component, OnInit } from '@angular/core';
import { Ingredients } from "../shared/ingredients.model";
import { ShopingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  Ingredients: Ingredients[];

  constructor(private shoppingService:ShopingListService) { }

  ngOnInit(): void {
    this.Ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientWasAdded.subscribe(
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
}
