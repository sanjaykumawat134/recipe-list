import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { AuthService } from "../auth/auth.service";
import { RecipesService } from "../recipes/recipes.service";
import { AuthInterceptor } from "../shared/auth.interceptor";
import { DataStorageService } from "../shared/data-storage.service";
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
        providers: [RecipesService, DataStorageService, AuthService,
            {
                provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
            }
        ],
    }
)
export class CoreModule {
}