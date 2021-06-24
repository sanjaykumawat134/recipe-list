import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredients.model';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/index'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInput: ElementRef;
  // @ViewChild('amountInput') amountInput: ElementRef;
  // @Output() ingredientsTobeAdded = new EventEmitter<Ingredients>();
  @ViewChild('f') editForm: NgForm;
  subscription: Subscription;
  itemIndex: number;
  editStatus = false;
  editedItem: Ingredients;
  constructor(private store: Store<fromShoppingList.AppState>) { }

  ngOnInit(): void {
    this.subscription = this.store.select('shoppingList').subscribe(
      (data) => {
        if (data.editedIngredientIndex > -1) {
          this.editedItem = data.editedIngredient;
          this.editStatus = true;
          this.editForm.setValue(
            {
              name: this.editedItem.name,
              amount: this.editedItem.amount
            }
          )
        } else {
          this.editStatus = false;
        }

      }
    )

    // this.subscription = this.shoppingService.startedEditing.subscribe(
    //   (value: number) => {
    //     this.editStatus = true;
    //     this.itemIndex = value;
    //     this.editedItem = this.shoppingService.getIngredient(this.itemIndex);
    //     this.editForm.setValue(
    //       {
    //         name: this.editedItem.name,
    //         amount: this.editedItem.amount
    //       }
    //     )
    //   }
    // )
  }

  addIngredients(form: NgForm) {
    const ingredient = new Ingredients(form.value.name, form.value.amount);
    if (!this.editStatus) { this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient)); }
    else {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ ingredient: ingredient }));
    }
  }

  onClear(): void {
    this.editForm.reset();
    this.editStatus = false;
  }

  onDelete(): void {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }
  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }
}
