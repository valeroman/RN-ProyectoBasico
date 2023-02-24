import 'react-native-gesture-handler';
import React from 'react';
import { Navigator } from './src/navigator/Tab1';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { ThemeProvider } from './src/components/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigator/Tabs';


const App = () => {

  return (
    <Provider store={ store }>
      <AppState>
        {/* <NavigationContainer> */}
          {/* <Navigator /> */}
          <Tabs />
        {/* </NavigationContainer> */}
      </AppState>
    </Provider>
  )
}

const AppState = ({ children }: any) => {

  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}

export default App;
