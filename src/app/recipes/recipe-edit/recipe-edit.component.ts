import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode = false;
  recipeForm : FormGroup;
  constructor(private route :ActivatedRoute,private recipeService : RecipesService,private router :Router) {
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.editMode = params['id']!=null    // if param has id then true otherwise false
        this.initForm();
      }
    )
  }

  private initForm(){
    let recipeName ='';
    let recipeImg ='';
    let recipeDesc ='';
    let recipeIngredients = new FormArray([]);
    if(this.editMode){
      // if edit mode is true then we have to intialize form with default name
      let recipe = this.recipeService.getRecipe(this.id);
       recipeName = recipe.name;
       recipeImg = recipe.imagePath;
       recipeDesc = recipe.description;
      //  console.log(recipe)
       if(recipe['ingredients']){
         for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup(
              {
                'name': new FormControl(ingredient.name ,Validators.required),
                'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
              }
            )
          )
         }
       }
    }
    this.recipeForm = new FormGroup({
        'recipeName': new FormControl(recipeName ,[Validators.required]),
        'recipeImg': new FormControl(recipeImg,[Validators.required]),
        'recipeDesc': new FormControl(recipeDesc,Validators.required),
        'ingredients': recipeIngredients
    } )
 }
getControls(){
  return (<FormArray>this.recipeForm.get('ingredients')).controls;
}

onAddIngredient():void{
  (this.recipeForm.get('ingredients') as FormArray)
  .push(
    new FormGroup(
      {
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      }
    )
  )
}
onSubmit():void{
  // console.log(this.recipeForm)
   let newRecipe = new Recipe(this.recipeForm.value['recipeName'],this.recipeForm.value['recipeDesc'],this.recipeForm.value['recipeImg'],this.recipeForm.value['ingredients']);
  //  console.log(newRecipe)
  if(this.editMode){
    this.recipeService.updateRecipe(this.id,newRecipe)
  }
  else{
    this.recipeService.addRecipe(newRecipe);
  }
  // console.log("form submited")
  this.onCancel();
}
onCancel():void{
this.router.navigate(['../'],{relativeTo:this.route});
}
onDeleteIngredient(index:number):void{
  (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
}
}
