export interface Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  ingredients: Ingredient[];
  totalTime: number;
  calories: number;
}

export interface Ingredient {
  text: string;
  weight: number;
}
