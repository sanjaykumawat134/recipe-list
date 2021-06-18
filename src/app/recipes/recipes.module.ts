import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipes-list/recipe-item/recipe-item.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipeRoutingModule } from "./recipes-routing.module";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    declarations:[
            RecipesComponent,RecipesListComponent,RecipeDetailsComponent,RecipeEditComponent,RecipeItemComponent,
            RecipeStartComponent
          ],
    imports:[
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          RecipeRoutingModule
    ]
})
export class RecipesModule{}