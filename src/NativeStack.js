import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {Screen} from './Screen';

const Stack = createNativeStackNavigator();

export const NativeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={Screen}
      name={'NATIVE_STACK_SCREEN_1'}
      initialParams={{
        text: 'Native Stack first screen',
        nextScreen: 'NATIVE_STACK_SCREEN_2',
      }}
    />
    <Stack.Screen
      component={Screen}
      name={'NATIVE_STACK_SCREEN_2'}
      initialParams={{text: 'Native Stack second screen'}}
    />
  </Stack.Navigator>
);
