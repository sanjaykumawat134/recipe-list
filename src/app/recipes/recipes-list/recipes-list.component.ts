import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe("Dal bati","testy recipe","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/pxsvyfpssbzmjfkjpck9"),
    new Recipe("Dal bati","testy recipe","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/pxsvyfpssbzmjfkjpck9")
  ];

  constructor() {

  }


  ngOnInit(): void {
  }

}
