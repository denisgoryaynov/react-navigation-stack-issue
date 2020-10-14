import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationStack} from './NavigationStack';
import {NativeStack} from './NativeStack';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => (
	<Tab.Navigator>
		<Tab.Screen component={NavigationStack} name={'NAVIGATION_STACK'} />
		<Tab.Screen component={NativeStack} name={'NATIVE_STACK'} />
	</Tab.Navigator>
);
