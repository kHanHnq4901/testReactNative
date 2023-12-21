/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import {
    MainScreen,
    FoodList,
    ProductGrid
} from './src/screen';


AppRegistry.registerComponent(appName, () => ProductGrid);
