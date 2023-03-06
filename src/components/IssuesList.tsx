import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Issue, State } from '../interfaces';
import { IssueCard } from './IssueCard';

const windownWidth = Dimensions.get('window').width;

interface Props {
    issues: Issue[];
    state?: State;

    onStateChanged: (state?: State) => void;

}


export const IssuesList = ({ issues, state, onStateChanged }:Props) => {

    const renderItem = ( issue: Issue ) => {
        return (
          <IssueCard issue={ issue } key={ issue.id } />
        )
      }

    return (
        <View style={{ top: 20, marginBottom: 360 }}>
            <View 
                style={{ 
                    ...styles.container,
                    width: windownWidth - 20,
                }}
            >
                <View>
                    <View style={ styles.containerButtons }
                    >
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            // disabled={ true }
                            style={{
                                ...styles.button,
                                backgroundColor: !state ? '#5856D6' : 'grey' 
                            }}
                            onPress={ () => onStateChanged() }
                        >
                            <Text style={ styles.buttonText }>All</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={{
                                ...styles.button,
                                backgroundColor: state === State.Open ? '#5856D6' : 'grey'
                            }}
                            onPress={ () => onStateChanged( State.Open ) }
                        >
                            <Text style={ styles.buttonText }>Open</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={{
                                ...styles.button,
                                backgroundColor: state === State.Closed ? '#5856D6' : 'grey'
                            }}
                            onPress={ () => onStateChanged( State.Closed ) }
                        >
                            <Text style={ styles.buttonText }>Closed</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <FlatList 
                            data={ issues }
                            keyExtractor={ (issue) => issue.id.toString()  }
                            showsVerticalScrollIndicator={ false }
                            renderItem={ (issue) => renderItem( issue.item ) }
                     />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'black', 
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: 'black',
        marginBottom: 20,
        padding: 10,
        borderRadius: 10
    },
    button: {
        borderRadius: 10,
        
        width: 70,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
});
