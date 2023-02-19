import React, { useEffect } from 'react'
import { Appearance, AppState, View } from 'react-native'
import { useThemes } from '../hooks/useThemes';
import { useThemeStore } from '../hooks/useThemeStore';

export const ThemeProvider = ({ children }: any) => {

    const { setDarkTheme, setLightTheme } = useThemeStore();

    const { darkTheme, lightTheme } = useThemes();

    console.log('UNO');

    useEffect(() => {
        AppState.addEventListener('change', ( status ) => {
            console.log({status});
            if ( status === 'active' ) {
                ( Appearance.getColorScheme() === 'light' )
                    ? setLightTheme(lightTheme)
                    : setDarkTheme(darkTheme)
            }
        });

    },[]);

    return (
        <>
            { children }
        </>
    )
}
