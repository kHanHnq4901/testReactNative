import React , { Component,useState} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert,
    SafeAreaView,
    ImageBackground,
    FlatList,
}
from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {} from '../screen'
import {Login,
    FoodList,
    ProductGrid,
    Profile,
    Settings,
    Welcome,
    Register,
    Population
} from '../screen/index';
 import UITab from './UITab';
const Stack = createNativeStackNavigator()
function App(props: any) {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{
            headerShown: false
        }}>
          <Stack.Screen name={'Login'} component={Login} />
          <Stack.Screen name={'Register'} component={Register} />
          <Stack.Screen name={'Welcome'} component={Welcome} />
          <Stack.Screen name={'FoodList'} component={FoodList} />
          <Stack.Screen name={'ProductGrid'} component={ProductGrid} />
          <Stack.Screen name={'Profile'} component={Profile} />
          <Stack.Screen name={'Settings'} component={Settings} />
          <Stack.Screen name={'Population'} component={Population} />
         { <Stack.Screen name={'UITab'} component={UITab }/> }
        </Stack.Navigator>
      </NavigationContainer>
  
  }

export default App;