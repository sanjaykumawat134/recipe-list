import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGaurdService } from "../auth/auth-gaurd.service";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesComponent } from "./recipes.component";

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGaurdService] },
      { path: ':id', component: RecipeDetailsComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGaurdService] }
    ]
  },
]

@NgModule(
  {
    imports:
      [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
      AuthGaurdService
    ]
  }
)
export class RecipeRoutingModule {

}