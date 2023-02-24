import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeStore } from '../hooks/useThemeStore';
import { useAppDispatch, useAppSelector } from '../store';
import { onSetLightTheme } from '../store/slices/theme';
import { styles } from '../theme/appTheme';
import { ThemeState, useThemes } from '../hooks/useThemes';
import { usePokemonpaginated } from '../hooks';
import { PokemonCard } from '../components/PokemonCard';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const { isLoading, simplePokemonList, loadPokemons } = usePokemonpaginated();

  const { setDarkTheme, setLightTheme } = useThemeStore();

  const { darkTheme, lightTheme } = useThemes();

  const { theme } = useAppSelector( state => state.theme );

  const renderItem = ( item: SimplePokemon ) => {
    return (
      <PokemonCard pokemon={ item } key={ item.id } />
    )
  }

  return (
    <>
        <Image 
          source={ require('../assets/pokebola.png') }
          style={{
            ...styles.pokebolaBG,
            // tintColor: theme.colors.text
          }}
        />
        <View style={{ alignItems: 'center' }}>
          <FlatList 
            data={ simplePokemonList }
            keyExtractor={ (pokemon) => pokemon.id  }
            showsVerticalScrollIndicator={ false }
            numColumns={ 2 }

            //  header
            ListHeaderComponent={(
              <Text style={{
                  ...styles.title,
                  color: theme.colors.text,
                  ...styles.globalMargin,
                  top: top + 20,
                  marginBottom: top + 20,
                  padding: 10
              }}>
                Pokedex
              </Text>
            )}
            renderItem={ ({ item }) => renderItem( item ) }
            // renderItem={ ({ item }) => (<PokemonCard pokemon={ item } key={ item.id } />)}

            //  Infinite scroll
            onEndReached={ loadPokemons }
            onEndReachedThreshold={ 0.4 }

            ListFooterComponent={ 
              <ActivityIndicator 
                style={{ height: 100 }}
                size={ 20 } 
                color="grey"
              /> 
            }
          />
        </View>
        
        {/* <View 
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
        </View> */}
    </>
  )
}
