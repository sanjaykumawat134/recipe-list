import {Recipe} from "./recipe.model"

export class RecipesService{
 private recipes:Recipe[]=[
     new Recipe("Dal bati","testy recipe","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/pxsvyfpssbzmjfkjpck9"),
    new Recipe("Dal bati another","testy recipe","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/pxsvyfpssbzmjfkjpck9")
 
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  constructor() { }
}
