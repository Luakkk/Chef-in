import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDetail } from '../models/recipe-detail.model';
import { RecipeService } from '../service/recipedetail.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeId: string = ''; // Initialize recipeId with an empty string
  recipe: RecipeDetail | undefined; // Initialize recipe as undefined

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeId = params['id'];
      this.fetchRecipeDetail();
    });
  }

  fetchRecipeDetail() {
    this.recipeService.getRecipeDetail(this.recipeId).subscribe((recipe: RecipeDetail) => {
      this.recipe = recipe;
    });
  }
}
