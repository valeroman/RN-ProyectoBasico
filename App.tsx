import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={ client }>
        <Navigator />
      </QueryClientProvider>
    </NavigationContainer>
  )
}

export default App;
