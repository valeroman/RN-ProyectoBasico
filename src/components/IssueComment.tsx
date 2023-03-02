import React from 'react'
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

const windownWidth = Dimensions.get('window').width;
interface Props {
    body: string;
}


export const IssueComment = ({body}: Props) => {
    // console.log('body', body.length)
  return (
    <ScrollView
        showsVerticalScrollIndicator={ false }
        style={{ marginBottom: 180 }}
    >
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
                source={{ uri: 'https://avatars.githubusercontent.com/u/1933404?v=4' }}
                style={{
                    width: 35,
                    height: 35,
                    borderRadius: 50,
                    marginHorizontal: 10
                }}
            />
            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', width: windownWidth - 80 }}>IssueComment</Text>
        </View>
        <View style={{ padding: 10 }}>
            <Markdown
            >
                {body}
            </Markdown>
        </View>
    </ScrollView>
  )
}
