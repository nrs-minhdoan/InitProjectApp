import React, {FC} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import AppRoutes from 'routes/App.routes';

const RootRoutes: FC = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default RootRoutes;
