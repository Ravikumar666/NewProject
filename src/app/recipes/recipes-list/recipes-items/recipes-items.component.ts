import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-items',
  templateUrl: './recipes-items.component.html',
  styleUrls: ['./recipes-items.component.scss'],
})
export class RecipesItemsComponent {
  @Input() recipe: any;
  @Output() recipeselected = new EventEmitter<void>();

  OnselectedItem() {
    this.recipeselected.emit();
  }
}
