import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import BottomTabNavigator from './Component/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
