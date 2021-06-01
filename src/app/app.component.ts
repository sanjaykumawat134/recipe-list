import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-list';
  isrecipe:string= 'recipes'
  displayRecipe(elem:any){
    this.isrecipe = elem;
  }
}
