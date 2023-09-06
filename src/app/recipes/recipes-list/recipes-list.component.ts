import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Recipes',
      'indian food',
      'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_1280.jpg'
    ),
    new Recipe(
      'Mutton',
      'indian food',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: any) {
    this.recipeWasSelected.emit(recipe);
  }
}
