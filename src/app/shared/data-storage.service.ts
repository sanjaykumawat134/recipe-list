import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http : HttpClient,private recipeService : RecipesService,
         private authService: AuthService
    ) { }

  storeRecipes(){
     const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-app-b52dc-default-rtdb.firebaseio.com/recipes.json?auth='+token,this.recipeService.getRecipes());
  }

  getStoredRecipes(){
    //  this.authService.getToken().then(
    //    (token :string)=>{
    //  this.http.get<Recipe[]>('https://ng-recipe-app-b52dc-default-rtdb.firebaseio.com/recipes.json?auth='+token)
    //  .subscribe(
    //    (response:Recipe[])=>{
    //     //  this.recipeService.setRecipes(<Recipe[]>response);
    //     // console.log(response)
    //     // console.log(<Recipe[]>response);
    //     // const recipes : Recipe[] = response;
    //     // console.log(recipes)
    //     let result : Recipe[] = [];
    //     response.forEach(
    //       (element)=>{
    //         if(!element['ingredients']){
    //           result.push(new Recipe(element.name,element.description,element.imagePath,[]));
    //         }
    //         result.push(new Recipe(element.name,element.description,element.imagePath,element.ingredients));
    //       }
    //     )
    //     this.recipeService.setRecipes(result);
    //     // return result;
    //    }
    //  )
    //   } )
    const token = this.authService.getToken();
     this.http.get<Recipe[]>('https://ng-recipe-app-b52dc-default-rtdb.firebaseio.com/recipes.json?auth='+token)
     .subscribe(
       (response:Recipe[])=>{
        //  this.recipeService.setRecipes(<Recipe[]>response);
        // console.log(response)
        // console.log(<Recipe[]>response);
        // const recipes : Recipe[] = response;
        // console.log(recipes)
        let result : Recipe[] = [];
        response.forEach(
          (element)=>{
            if(!element['ingredients']){
              result.push(new Recipe(element.name,element.description,element.imagePath,[]));
            }
            else{
            result.push(new Recipe(element.name,element.description,element.imagePath,element.ingredients));
            }
          }
        )
        this.recipeService.setRecipes(result);
        // return result;
       }
     )

  }
}
