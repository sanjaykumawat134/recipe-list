import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
    declarations:[
            ShoppingListComponent,
            ShoppingEditComponent,
    ],
    imports :[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ShoppingListRoutingModule
     ]
})
export class ShoppingListModule{
}