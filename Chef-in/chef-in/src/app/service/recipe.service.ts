import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe-search.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  searchRecipes(query: string): Observable<any> {
    // Replace 'YOUR_APP_ID' and 'YOUR_APP_KEY' with actual values
    const appId = '6f856a14';
    const appKey = 'a0585f4c8c25cf49d9c3516965b56089';
    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;

    return this.http.get(apiUrl);
  }
}
