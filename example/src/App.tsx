import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnimatedDropdownExample from './screens/AnimatedDropdownExample';
import SwipeCardsExample from './screens/SwipeCardsExample';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="AnimatedDropdown"
          component={AnimatedDropdownExample}
        />
        <Stack.Screen name="SwipeCards" component={SwipeCardsExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

