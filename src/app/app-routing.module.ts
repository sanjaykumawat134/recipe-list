import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './auth/auth-gaurd.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/recipes',
    pathMatch:'full'
  },
  {
    path:'recipes',
    component:RecipesComponent,
    children:[
      {path:'',component:RecipeStartComponent},
      {path:'new',component:RecipeEditComponent ,canActivate :[AuthGaurdService]},
      {path:':id',component:RecipeDetailsComponent},
      {path:':id/edit',component:RecipeEditComponent,canActivate:[AuthGaurdService]}
    ]
  },
  {
    path:'shopping-list',
    component:ShoppingListComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
   path:'signin',
   component:SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
