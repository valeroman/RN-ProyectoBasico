import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { IssueScreen } from '../screens/IssueScreen';
import { Issue } from '../interfaces/issue';
import { HomeScreenInfinite } from '../screens/HomeScreenInfinite';

export type RootStackParams = {
  HomeScreenInfinite: undefined,
  HomeScreen: undefined,
  IssueScreen: { issue: Issue },
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="HomeScreenInfinite" component={ HomeScreenInfinite } />
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="IssueScreen" component={ IssueScreen } />
    </Stack.Navigator>
  );
}