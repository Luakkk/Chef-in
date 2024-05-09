import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../models/recipe-search.model';
import { RecipeService } from '../service/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {}

  search() {
    if (this.query.trim() !== '') {
      this.recipeService.searchRecipes(this.query).subscribe((data: any) => {
        this.recipes = data.hits.map((hit: any) => hit.recipe);
      });
    }
  }

  goToRecipeDetail(uri: string) {
    this.router.navigate(['/recipe-detail', uri]);
  }
}
