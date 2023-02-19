import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from '../store';

const Stack = createStackNavigator();



export const Navigator = () => {

  const { theme } = useAppSelector( state => state.theme );

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <NavigationContainer
        theme={ theme }
      >
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    // backgroundColor: 'white'
                }
            }}
        >
          <Stack.Screen name="HomeScreen" component={ HomeScreen } />
          <Stack.Screen name="PokemonScreen" component={ PokemonScreen } />
        </Stack.Navigator>

      </NavigationContainer>
    </View>
  );
}