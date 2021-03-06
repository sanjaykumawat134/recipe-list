import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service"
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
 
})
export class RecipesListComponent implements OnInit , OnDestroy{
  recipes : Recipe[] = [];
  subscription : Subscription;
  @Output() recipeTobind = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipesService,private route : ActivatedRoute,private router:Router) {}
  ngOnInit(): void {
    this.subscription =
    this.recipeService.recipeChanged.subscribe(
      (recipes : Recipe[])=>{
        this.recipes = recipes;
      }
      )
      this.recipes = this.recipeService.getRecipes();
  }

  recipeDetail(rec: Recipe) {
    this.recipeService.recipeSelected.emit(rec);
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
 ngOnDestroy(){
  this.subscription.unsubscribe();
 }
}
