import 'react-native-gesture-handler';
import React from 'react';
import { Navigator } from './src/navigator/Navigator';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { ThemeProvider } from './src/components/ThemeProvider';

const App = () => {
  return (
    <Provider store={ store }>
      <AppState>
        <Navigator />
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
