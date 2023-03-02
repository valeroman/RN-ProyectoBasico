import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { IssueCard } from './IssueCard';

export interface DataIssue  {
    id     : string;
    message   : string;
}

const data: DataIssue = {
    id: '1',
    message: 'Suggestion: why not make accessing and changing the state possible globally?'
}

const datafinal = [data];
// console.log(datafinal);


export const IssuesList = () => {

    const renderItem = ( item: DataIssue ) => {
        return (
          <IssueCard item={ item } key={ item.id } />
        )
      }

    return (
        <View style={{ top: 20 }}>
            <FlatList 
                data={ datafinal }
                keyExtractor={ (datafinal) => datafinal.id  }
                showsVerticalScrollIndicator={ false }
                renderItem={ (item) => renderItem( item.item ) }
            />
        </View>
    )
}
