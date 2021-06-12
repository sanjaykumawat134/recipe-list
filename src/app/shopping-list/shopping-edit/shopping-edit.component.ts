import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShopingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {
  // @ViewChild('nameInput') nameInput: ElementRef;
  // @ViewChild('amountInput') amountInput: ElementRef;
  // @Output() ingredientsTobeAdded = new EventEmitter<Ingredients>();
  @ViewChild('f') editForm : NgForm;
  subscription : Subscription;
  itemIndex :number;
  editStatus = false;
  editedItem : Ingredients;
  constructor(private shoppingService :ShopingListService) { }

  ngOnInit(): void {
   this.subscription = this.shoppingService.startedEditing.subscribe(
      (value:number)=>{
        this.editStatus = true;
        this.itemIndex = value;
        this.editedItem = this.shoppingService.getIngredient(this.itemIndex);
        this.editForm.setValue(
          {
            name:this.editedItem.name,
            amount:this.editedItem.amount
          }
        )
      }
    )
  }

  addIngredients(form:NgForm) {
    // event.preventDefault();
    // console.log(this.nameInput.nativeElement.value)
    // this.Ingredients.push({
    //   name:this.nameInput.nativeElement.value,
    //   amount:this.amountInput.nativeElement.value
    // });
    // console.log(ingredient);
    // const ingredient = new Ingredients(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    const ingredient = new Ingredients(form.value.name,form.value.amount);
    // this.ingredientsTobeAdded.emit(ingredient);
    // console.log(ingredient)
    if(!this.editStatus){this.shoppingService.addIngredients(ingredient);}
    else{this.shoppingService.updateExistingIngredient(this.itemIndex,ingredient)}
  }

  onClear():void{
    this.editForm.reset();
    this.editStatus = false;
  }

  onDelete():void {
    this.shoppingService.deleteIngredient(this.itemIndex);
    this.onClear();
  }
   ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
