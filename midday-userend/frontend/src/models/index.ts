export interface Category{
  name: String,
  image: String
}

export interface LoadCategoriesAction{
  type: String,
  categories: Category[]
}

export type RestaurantAction = LoadCategoriesAction;
