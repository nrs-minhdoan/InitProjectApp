/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import i18n from 'translations/i18n';
import RootRoutes from 'routes/Root.routes';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <I18nextProvider i18n={i18n}>
          <BottomSheetModalProvider>
            <SafeAreaView style={styles.container}>
              <StatusBar
                barStyle={isDarkMode ? 'dark-content' : 'light-content'}
              />

              <RootRoutes />
            </SafeAreaView>
          </BottomSheetModalProvider>
        </I18nextProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
