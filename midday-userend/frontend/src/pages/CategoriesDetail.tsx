import React from 'react';

import { Route } from '../models';
import RestaurantsList from '../components/RestaurantsList';

export default function CategoriesDetail ({ route }:{route:Route}) {
  return <RestaurantsList route = {route}/>;
}
