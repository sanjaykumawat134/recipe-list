import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredients } from "../shared/ingredients.model";
import * as fromShoppingList from './store/index';
import * as ShoppingListActions from './store/shopping-list.actions';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<{ ingredients: Ingredients[] }>;
  constructor(private store: Store<fromShoppingList.AppState>) { }

  ngOnInit(): void {
    this.shoppingListState = this.store.select('shoppingList')
  }
  onShoppingListEdit(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
  ngOnDestroy() {

  }
}
