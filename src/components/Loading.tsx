import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const Loading = () => {

    return (
        <View style={ styles.loadingIndicator }>
            <ActivityIndicator 
                // color={ color }
                size={ 50 }

            />
        </View>
    )
}

const styles = StyleSheet.create({
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 20
      }
});
