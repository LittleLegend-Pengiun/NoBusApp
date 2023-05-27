import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home"
import AddressScr from './AddressScr';
import BusInfo from './BusInfo';
import RouteInfo from './RouteInfo'

const listScreens = [
  {
    name: 'Home',
    Component: Home,
  },
  {
    name: 'Address',
    Component: AddressScr,
  },
  {
    name: "BusInfo",
    Component: BusInfo
  },
  {
    name: "RouteInfo",
    Component: RouteInfo
  }
]
const Stack = createNativeStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {listScreens.map((item) => (
          <Stack.Screen 
           key={item.name} 
           name={item.name} 
           component={item.Component} 
           options={
            {presentation: "fullScreenModal", headerShown: false}
           }
           />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}