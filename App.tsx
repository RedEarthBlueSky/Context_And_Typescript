import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, NativeModules } from 'react-native';

import Todos from './src/components/Todos.component'
import { Toolbar } from './src/components/Toolbar.component'

//  We choose the default theme for the initial theme
//  If we want dark theme as the initial theme, we just import that one
import { DEFAULT_LIGHT_THEME } from './src/themes/DefaultLight.theme';
import { ThemeProvider } from './src/Contexts/Theme.context';

const { StatusBarManager } = NativeModules

const App = React.memo(() => {
  console.log(StatusBarManager.HEIGHT)
  return (
    <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
      <View style={styles.container}>
        <Toolbar title='Friday Title'/>
        <Text>This text is from App.tsx</Text>
        <Todos />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
});

export default App
