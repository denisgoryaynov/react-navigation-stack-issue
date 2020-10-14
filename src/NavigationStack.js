import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Screen} from './Screen';

const Stack = createStackNavigator();

export const NavigationStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={Screen}
      name={'NAVIGATION_STACK_SCREEN_1'}
      initialParams={{
        text: 'Navigation Stack first screen',
        nextScreen: 'NAVIGATION_STACK_SCREEN_2',
      }}
    />
    <Stack.Screen
      component={Screen}
      name={'NAVIGATION_STACK_SCREEN_2'}
      initialParams={{text: 'Navigation Stack second screen'}}
    />
  </Stack.Navigator>
);
