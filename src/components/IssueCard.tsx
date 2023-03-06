import React from 'react'
import { useQueryClient } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons';
import { Issue, State } from '../interfaces/issue';
import { getIssueCommets, getIssueInfo } from '../hooks';
import { timeSince } from '../helpers';

const {width} = Dimensions.get('window');

interface Props {
    issue: Issue
}

export const IssueCard = ({ issue }: Props) => {

    const navigation = useNavigation<any>();

    const queryclient = useQueryClient();

    const prefetchData = () => {

        queryclient.prefetchQuery(
            ['issue', issue.number],
            () => getIssueInfo( issue.number ),
        );
        // cargar los comentarios
        queryclient.prefetchQuery(
            ['issue', issue.number, 'comments'],
            () => getIssueCommets( issue.number ),
        );
    }

    const onPressIn = () => {
        console.log('press')
    }

    // Mando la data que va hacer almacenada en el cache
    const preSetData = () => {

        queryclient.setQueryData(
            ['issue', issue.number],
            issue,
            {
                updatedAt: new Date().getTime() + 100000
            }
        );
    }

    return (
        <TouchableOpacity
        onPressIn={ onPressIn }
            onPress={
                () => navigation.navigate('IssueScreen', { issue: issue } )
            }
        >
            <View style={{...styles.cardContainer, width: width - 40}}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ right: 0  }}>
                        {
                            issue.state === State.Open
                                ? ( <Icon 
                                        name='alert-circle-outline'
                                        size={20}
                                        color='red'
                                     /> )
                                : (  <Icon 
                                        name='checkbox-outline'
                                        size={20}
                                        color='green'
                                    />)
                        }
                        
                       
                    </View>
                    <View style={{ width: 200, left: 5 }}>
                        <Text style={ styles.textMessage }>{ issue.title }</Text>
                        <Text style={ styles.text }>#{ issue.number } opened { timeSince( issue.created_at ) } ago by </Text>
                        <Text style={ styles.textMessage }>{ issue.user.login }</Text>
                        <View>
                            {
                                issue.labels.map(label => (
                                    <View
                                        key={ label.id }
                                        style={{
                                            ...styles.labelContainer,
                                            borderColor: `#${ label.color }`,
                                            borderWidth: 1,
                                            marginBottom: 10,
                                            backgroundColor:  `#${ label.color }`
                                        }}
                                    >
                                        <Text>{ label.name }</Text>

                                    </View>
                                ))
                            }
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', left: 5 }}>
                        <View 
                            style={{ 
                                // backgroundColor: 'red', 
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                
                            }}
                        >
                            <Image
                                source={{ uri: `${ issue.user.avatar_url }`}} 
                                style={ styles.avatarImage }
                            />
                            <View style={{ left: 5 }}>
                                <Text>{ issue.comments }</Text>
                            </View>
                            <View>
                                <Icon 
                                    name='chatbox-outline'
                                    size={20}
                                    color='black'
                                    style={{ left: 10}}
                                />
                            </View>
                        </View>
                    </View>
                </View>

            </View>
            {/* <Text>{ item.message }</Text> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        // height: 140,
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
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        // marginHorizontal: 5
    },
    textMessage: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'auto'
    },
    text: {
        fontSize: 13,
        // fontWeight: 'bold',
        textAlign: 'auto'
    },
   
    labelContainer: {
        top: 5,
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    }
});
