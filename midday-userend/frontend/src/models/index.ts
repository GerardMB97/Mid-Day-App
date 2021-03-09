export interface Category{
  name: string,
  image: string
}

export interface LoadCategoriesAction{
  type: string,
  categories: Category[]
}

export interface FilterCategories{
  type: string,
  value: string
}

 interface Actions{
  loadCategories: any
}

export interface Props {
    categories: Category[],
    actions: Actions

}

export interface State {
  categories: {
    allCategories: Category[],
    filteredCategories: Category[]
  }
}
