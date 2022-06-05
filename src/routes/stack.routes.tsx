import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/home';
import { Profile } from '../screens/profile';

const {Navigator, Screen} = createNativeStackNavigator()

export const StackRoutes = () => {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  )
}