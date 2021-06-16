import {Component, EventEmitter, Output} from "@angular/core";
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
  constructor(private storageService : DataStorageService){}
 
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
}
