import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeStore } from '../hooks/useThemeStore';
import { useAppDispatch, useAppSelector } from '../store';
import { onSetLightTheme } from '../store/slices/theme';
import { styles } from '../theme/appTheme';
import { ThemeState, useThemes } from '../hooks/useThemes';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const { setDarkTheme, setLightTheme } = useThemeStore();

  const { darkTheme, lightTheme } = useThemes();

  const { theme } = useAppSelector( state => state.theme );

// console.log('{[X]}', theme)
  return (
    <>
        <Image 
          source={ require('../assets/pokebola.png') }
          style={ styles.pokebolaBG }
        />
        <Text style={{
          ...styles.title,
          color: theme.colors.text,
          ...styles.globalMargin,
          top: top + 20
        }}>
          Pokedex
        </Text>
        <View 
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20
          }}
        >
          <TouchableOpacity
              onPress={ () => setLightTheme(lightTheme) }
              style={{
                  top: 100,
                  width: 150,
                  height: 50,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  borderRadius: 20,
              }}
              activeOpacity={0.8}
          >
              <Text
                  style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 22
                  }}
              >
                  Light
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={ () => setDarkTheme(darkTheme) }
              style={{
                  top: 100,
                  width: 150,
                  height: 50,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  borderRadius: 20,
              }}
              activeOpacity={0.8}
          >
              <Text
                  style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 22
                  }}
              >
                  Dark
              </Text>
          </TouchableOpacity>
        </View>
    </>
  )
}
