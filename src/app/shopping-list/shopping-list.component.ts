import { Component, OnInit } from '@angular/core';
import {Ingredients} from "../shared/ingredients.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  Ingredients :Ingredients[] = [
    new Ingredients("Dal",50),
    new Ingredients("tomato",1),
    new Ingredients("aata",50)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
