import React from 'react'
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Issue } from '../interfaces';

const windownWidth = Dimensions.get('window').width;

interface Props {
    issue: Issue;
}


export const IssueComment = ({ issue }: Props) => {
    // console.log('body', body.length)
  return (

    <>
        <View 
            style={{ 
                backgroundColor: 'grey', 
                flexDirection: 'row', 
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: 5,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
                // height: 50,
                width: windownWidth - 20,
            }}
        >
            <Image 
                source={{ uri: `${ issue.user.avatar_url }` }}
                style={{
                    width: 35,
                    height: 35,
                    borderRadius: 50,
                    marginHorizontal: 10
                }}
            />
            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', width: windownWidth - 80 }}>{ issue.user.login } commented</Text>
        </View>
        
        <View style={{ padding: 10 }}>
            <Markdown
            >
                { issue.body }
            </Markdown>
        </View>
    </>

  )
}
