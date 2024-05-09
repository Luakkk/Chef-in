// recipe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeDetail } from '../models/recipe-detail.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private appId = '6f856a14';
  private appKey = 'a0585f4c8c25cf49d9c3516965b56089';
  private apiUrl = 'https://api.edamam.com/api/recipes/v2';

  constructor(private http: HttpClient) {}

  getRecipeDetail(recipeId: string): Observable<RecipeDetail> {
    const url = `${this.apiUrl}/${recipeId}?type=public&app_id=${this.appId}&app_key=${this.appKey}`;
    return this.http.get<RecipeDetail>(url);
  }
}
