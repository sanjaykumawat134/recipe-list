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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesService } from './recipes/recipes.service';
import { DataStorageService } from './shared/data-storage.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ 
    AppComponent,HeaderComponent,RecipesComponent,RecipesListComponent,RecipeItemComponent,ShoppingListComponent,ShoppingEditComponent,RecipeDetailsComponent, RecipeStartComponent,RecipeStartComponent
  ,RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShopingListService,RecipesService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
