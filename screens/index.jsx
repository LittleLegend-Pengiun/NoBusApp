import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home"

const listScreens = [
  {
    name: 'Home',
    Component: Home,
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