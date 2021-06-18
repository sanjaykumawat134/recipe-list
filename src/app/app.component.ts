import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-list';
  // isrecipe:string= 'recipes'
  // displayRecipe(elem:any){
  //   this.isrecipe = elem;
  // }

  ngOnInit(){
   firebase.initializeApp( {
     apiKey: "AIzaSyD6t8JadVLWKUWUa51NwNVGEkhR2IrX3v8",
    authDomain: "ng-recipe-app-b52dc.firebaseapp.com"
  })
}

}
