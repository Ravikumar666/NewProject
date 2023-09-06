import { Component, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [];

  constructor() {}

  onIngAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onRemoved(ingredient: Ingredient) {
    this.ingredients.pop();
  }

  onCleared(ingredient: Ingredient) {
    this.ingredients = [];
  }

  onRemovedTap() {
    this.ingredients.shift();
  }
}
