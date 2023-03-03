import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Issue } from '../interfaces';
import { IssueCard } from './IssueCard';


interface Props {
    issues: Issue[];
}


export const IssuesList = ({ issues }:Props) => {

    const renderItem = ( issue: Issue ) => {
        return (
          <IssueCard issue={ issue } key={ issue.id } />
        )
      }

    return (
        <View style={{ top: 20 }}>
            <FlatList 
                data={ issues }
                keyExtractor={ (issue) => issue.id.toString()  }
                showsVerticalScrollIndicator={ false }
                renderItem={ (issue) => renderItem( issue.item ) }
            />
        </View>
    )
}
