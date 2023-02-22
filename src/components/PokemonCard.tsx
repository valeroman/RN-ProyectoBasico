import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageColors from 'react-native-image-colors';
import { getImageColors } from '../helpers/getColors';

import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const windownWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState('grey');
    const isMounted = useRef(true);

    const navigation = useNavigation<any>();
    
    const getColorsBGPokemon = async() => {
        const [ primary ] = await getImageColors( pokemon.picture );
        setBgColor( primary! );
    }

    useEffect(() => {
        if ( !isMounted.current ) return;
        getColorsBGPokemon();

        return () => {
            isMounted.current = false;
        }
    },[]);


    return (
    <TouchableOpacity
        activeOpacity={ 0.8 }
        onPress={ 
            () => navigation.navigate('PokemonScreen', { 
                simplePokemon: pokemon,
                color: bgColor
             }) }
    >
        <View style={{
            ...styles.cardContainer,
            width: windownWidth * 0.4,
            backgroundColor: bgColor,
        }}>
            {/* Nombre del pokemon y id */}
            <View>
                <Text style={ styles.name }>
                    { pokemon.name }
                    { '\n#' + pokemon.id }
                </Text>
            </View>

            <View style={ styles.pokebolaContainer }>
                <Image 
                    source={ require('../assets/pokebola-blanca.png') }
                    style={ styles.pokebola }
                />
            </View>

            <FadeInImage 
                uri={ pokemon.picture }
                style={ styles.pokemonImage }
            />
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -8
    },
    pokebolaContainer: {
        // backgroundColor: 'blue',
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.5,
        overflow: 'hidden'
    }
});
