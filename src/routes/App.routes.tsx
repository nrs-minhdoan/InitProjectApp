import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Screen from 'screens/Screen';
import {EAppRouter, TAppRootParams} from 'models/routes.model';

const Stack = createStackNavigator<TAppRootParams>();

const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: true,
        headerBackTitleVisible: false,
        headerStatusBarHeight: 0,
      }}>
      <Stack.Screen name={EAppRouter.ScreenName} component={Screen} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
