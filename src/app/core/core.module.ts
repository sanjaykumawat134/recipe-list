import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { AuthGaurdService } from "../auth/auth-gaurd.service";
import { AuthService } from "../auth/auth.service";
import { RecipesService } from "../recipes/recipes.service";
import { DataStorageService } from "../shared/data-storage.service";
import { ShopingListService } from "../shopping-list/shopping-list.service";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";

@NgModule(
    {
        declarations: [
            HomeComponent,
            HeaderComponent,
        ],
        imports: [
            AppRoutingModule,
            CommonModule,
        ],
        exports: [
            HeaderComponent,
            AppRoutingModule

        ],
        providers: [ShopingListService, RecipesService, DataStorageService, AuthService,],
    }
)
export class CoreModule {
}