import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from './Tab1';
import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from '../store';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {

    const { theme } = useAppSelector( state => state.theme );

    return (
    <NavigationContainer
        theme={ theme }
    >
        <Tab.Navigator
        
            sceneContainerStyle={{
                backgroundColor: theme.colors.background
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: ( Platform.OS === 'ios') ? 0 : 10 
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    borderWidth: 0,
                    elevation: 0,
                    height: ( Platform.OS === 'ios') ? 80 : 60

                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={ Tab1 } 
                options={{ 
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            color={ color } 
                            size={ 25 }
                            name="list-outline"
                        />
                    ) 
                }}
            />
            <Tab.Screen 
                name="SearchScreen" 
                component={ Tab2Screen } 
                options={{ 
                    tabBarLabel: 'Búsqueda',
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            color={ color } 
                            size={ 20 }
                            name="search-outline"
                        />
                    ) 
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
    );
}