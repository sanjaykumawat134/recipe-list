import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGaurdService } from './auth/auth-gaurd.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from "./header/header.component";
import { RecipesModule } from './recipes/recipes.module';
import { RecipesService } from './recipes/recipes.service';
import { DataStorageService } from './shared/data-storage.service';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShopingListService } from "./shopping-list/shopping-list.service";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    AuthModule
  ],
  providers: [ShopingListService, RecipesService, DataStorageService, AuthService, AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
