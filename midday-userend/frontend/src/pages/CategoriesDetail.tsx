import React from 'react';

import { Route, Navigation } from '../models';
import RestaurantsList from '../components/RestaurantsList';

export default function CategoriesDetail ({ route, navigation }:{route:Route, navigation: Navigation}) {
  return <RestaurantsList route = {route} navigation = {navigation}/>;
}
