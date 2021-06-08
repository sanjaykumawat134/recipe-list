import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
   recipe:Recipe;
  constructor(private recipeService:RecipesService,private activeRoute:ActivatedRoute,private router :Router) { }
  id :number;
  ngOnInit(): void {
     this.activeRoute.params.subscribe(
       (params:Params)=>{
        this.id = +params['id']; 
        this.recipe = this.recipeService.getRecipe(this.id);
        }
     )
   
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.activeRoute});
  }
}
