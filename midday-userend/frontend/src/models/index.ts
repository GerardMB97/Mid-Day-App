export interface Category{
  name: string,
  image: string
}
export interface LoadCategoriesAction{
  type: string,
  categories: Category[]
}

export interface Restaurant{
  _id: string,
  name: string,
  capacity: number,
  menuPrice: number,
  image: string,
  category: Category,
  phone: number,
  street: string,
  number: number,
  city: string
  zip: number,
  __v: number
}

export interface LoadRestaurantAction{
  type: string,
  restaurants: Restaurant[]
}

export interface FilterCategories{
  type: string,
  value: string
}

export interface GetCategoryRestaurants{
  type: string,
  category: string
}

 interface Actions{
  loadCategories: any
}

export interface Props {
    categories: Category[],
    actions: Actions

}

export interface Ingredient {
  ingredient: string,
  isAllergic: boolean,
  name: string
}
export interface Booking {
  date: string,
  hour: string,
  bookingAdmin: User,
  pax: number,
  restaurant: Restaurant,
  _id: string
  people: {user: string | User, selections : string[]}[]
}
export interface User {
  name: string | undefined,
  bookings: Booking[],
  invitations: Booking[]
  password: string | undefined,
  email: string | undefined,
  allergies: string[],
  foodTastes: string[],
  _id: string | undefined,
  status: number
}

export interface State {
  categories: {
    allCategories: Category[],
    filteredCategories: Category[]
  },
  restaurants: {
    allRestaurants: Restaurant[],
    categoryRestaurants: Restaurant[],
    filteredRestaurants: Restaurant[],
    selectedRestaurant: Restaurant | {}
  },
  user:User,
  booking: Booking
  ingredients: Ingredient[]
}

export interface Route {
  params: string
}

export interface Navigation {
  navigate: Function
}
