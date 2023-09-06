import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef | any;
  @ViewChild('amountInput') amountInputRef: ElementRef | any;
  @Output() incridaientAdded = new EventEmitter<Ingredient>();
  @Output() incridaientremove = new EventEmitter<Ingredient>();
  @Output() incridaientClear = new EventEmitter<Ingredient>();

  FormInput: any;

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    let newIngredient = new Ingredient(ingName, ingAmount);
    this.FormInput = newIngredient;
    this.incridaientAdded.emit(this.FormInput);
  }

  onRemove() {
    console.log('Input', this.FormInput);
    this.incridaientremove.emit(this.FormInput);
  }
  onClear() {
    this.incridaientClear.emit(this.FormInput);
  }
}
