export interface Category{
  name: string,
  image: string
}

export interface LoadCategoriesAction{
  type: string,
  categories: Category[]
}

export type RestaurantAction = LoadCategoriesAction;

 interface Actions{
  loadCategories: any
}

export interface Props {
    categories: Category[],
    actions: Actions

}

export interface State {
  categories: Category[]
}
