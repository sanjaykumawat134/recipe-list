import {Component, EventEmitter, Output} from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { RecipesService } from "../recipes/recipes.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector:'app-header',
  templateUrl:'header.component.html',
  styleUrls:[
    "header.component.css"
  ]
})
export class HeaderComponent{
  // @Output() featureSelected = new EventEmitter<string>();

  //  onSelect(str:string){
  //   this.featureSelected.emit(str);
  //  }
  constructor(private storageService : DataStorageService,private authService : AuthService){}
 
  onSaveRecipes(){
        this.storageService.storeRecipes().subscribe(
          (response)=>{
            console.log(response)
          }
        )
  }
  onGetRecipes(){
    this.storageService.getStoredRecipes();
  }

  isAuthenticated(){
   return this.authService.isAuthenticate();
  }

  onLogout(){
    this.authService.signout();
  }
}
