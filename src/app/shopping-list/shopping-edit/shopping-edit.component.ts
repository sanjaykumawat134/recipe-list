import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShopingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  // @Output() ingredientsTobeAdded = new EventEmitter<Ingredients>();
  constructor(private shoppingService :ShopingListService) { }

  ngOnInit(): void {
  }

  addIngredients(event: any) {
    event.preventDefault();
    console.log(this.nameInput.nativeElement.value)
    // this.Ingredients.push({
    //   name:this.nameInput.nativeElement.value,
    //   amount:this.amountInput.nativeElement.value
    // });
    // console.log(ingredient);
    const ingredient = new Ingredients(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    // this.ingredientsTobeAdded.emit(ingredient);
    console.log(ingredient)
    this.shoppingService.addIngredients(ingredient);
  }
}
