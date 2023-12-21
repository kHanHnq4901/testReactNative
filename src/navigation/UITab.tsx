/**
 * yarn add react-navigation
 * yarn add react-native-safe-area-context
 * yarn add @react-navigation/bottom-tabs
 * yarn add @react-navigation/native
 * yarn add @react-navigation/native-stack
 */
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
import React from 'react';
import {
    FoodList,
    ProductGrid,
    Profile,
    Settings,
    Population,
} from '../screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fontSizes, colors } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => {
  return {
    headerShown: false,
    tabBarActiveTintColor: colors.white,
    tabBarInactiveTintColor: colors.black,
    tabBarActiveBackgroundColor:  colors.blue,
    tabBarInactiveBackgroundColor: colors.blue,
    tabBarIcon: ({ focused, color, size }) => {
      let screenName = route.name;
      const iconName =
      screenName === 'Sản phẩm' ? 'mobile' :
      screenName === 'Đồ ăn' ? 'star' :
      screenName === 'Thống kê' ? 'bars' : 
      screenName === 'Thông tin' ? 'user' : 
      screenName === 'Cài đặt' ? 'gear' : '';
   
      return (
        <Icon
          name={iconName}
          size={size}
          color={focused ? colors.white : colors.black}
        />
      );
    },
  };
};

function UITab() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Đồ ăn" component={FoodList} />
      <Tab.Screen name="Sản phẩm" component={ProductGrid} />
      <Tab.Screen name="Thống kê" component={Population} />
      <Tab.Screen name="Thông tin" component={Profile} />
      <Tab.Screen name="Cài đặt" component={Settings} />
  
    </Tab.Navigator>
  );
}

export default UITab;