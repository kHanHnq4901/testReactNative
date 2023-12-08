/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import MainScreen from './src/screen/login';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => MainScreen);
