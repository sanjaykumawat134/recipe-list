import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthRouting } from "./auth-routing.module";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule(
    {
        declarations: [
            SigninComponent,
            SignupComponent
        ],
        imports: [
            CommonModule,
            FormsModule,
            AuthRouting
        ]
    }
)
export class AuthModule {
}