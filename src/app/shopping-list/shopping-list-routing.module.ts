import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";
const route : Routes =[
 {
    path:'shopping-list',
    component:ShoppingListComponent
  },
]
@NgModule({
    imports:[
        RouterModule.forChild(route)
    ],
    exports:[
        RouterModule
    ]
})
export class ShoppingListRoutingModule{
}