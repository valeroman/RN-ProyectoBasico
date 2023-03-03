import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { IssueScreen } from '../screens/IssueScreen';
import { Issue } from '../interfaces/issue';

export type RootStackParams = {
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
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="IssueScreen" component={ IssueScreen } />
    </Stack.Navigator>
  );
}