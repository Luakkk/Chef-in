// recipe-detail.model.ts
export interface RecipeDetail {
  label: string;
  image: string;
  source: string;
  yield: number;
  totalTime: number;
  calories: number;
  ingredientLines: string[];
  url: string;
}
