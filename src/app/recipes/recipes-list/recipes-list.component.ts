import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service"
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
 
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[] = [];
  // @Output() recipeTobind = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipesService,private route : ActivatedRoute,private router:Router) {}


  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  recipeDetail(rec: Recipe) {
    this.recipeService.recipeSelected.emit(rec);
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
}
