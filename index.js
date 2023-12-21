/**
 * @format
 * yarn add axios
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
// import {
//     MainScreen,
//     FoodList,
//     ProductGrid,
//     Settings

// } from './src/screen';
import {UITab} from './src/navigation/UITab';
import App from './src/navigation/App';
AppRegistry.registerComponent(appName, () =>App);
