import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  isSelected: Recipe | any;

  ngOnInit() {}

  isSelectedOne(event: Recipe) {
    this.isSelected = event;
  }
}
