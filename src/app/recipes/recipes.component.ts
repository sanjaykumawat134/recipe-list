import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  // recipeItem :Recipe ;
  // constructor(private recipeService :RecipesService) { }
   constructor(){}
  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
    //   this.recipeItem = recipe;
    // })
  }


  // showRecipeDetails(sRec: any) {
  //   this.recipeItem = sRec;
  // }
}
