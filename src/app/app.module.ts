import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {RecipeDetailsComponent} from "./recipes/recipe-details/recipe-details.component";
import {ShopingListService} from "./shopping-list/shopping-list.service";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component"
@NgModule({
  declarations: [ 
    AppComponent,HeaderComponent,RecipesComponent,RecipesListComponent,RecipeItemComponent,ShoppingListComponent,ShoppingEditComponent,RecipeDetailsComponent, RecipeStartComponent,RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ShopingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
