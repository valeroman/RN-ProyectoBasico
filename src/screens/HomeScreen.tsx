import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IssuesList } from '../components/IssuesList';
import { LabelPicker } from '../components/LabelPicker';
import { Loading } from '../components/Loading';
import { useIssues } from '../hooks';
import { State } from '../interfaces';
import { styles } from '../Theme/globalTheme';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [state, setState] = useState<State>();

  const { issuesQuery } = useIssues({ labels: selectedLabels, state });

  const onLabelChanged = ( labelName: string ) => {
    ( selectedLabels.includes( labelName ) )
      ? setSelectedLabels( selectedLabels.filter( label => label !== labelName )  )
      : setSelectedLabels([...selectedLabels, labelName ]);
  }

  return (
    <>
      <View style={{...stylesHome.container, top: top + 20, ...styles.globalMargin} }>
        <View style={{...stylesHome.containerTitle}}>
          <Text style={ stylesHome.title }>Git Issues</Text>
          <Text style={ stylesHome.subTitle }>Seguimiento de problemas</Text>
        </View>

        <View>
        <View style={{ marginTop: 20 }}>
          <LabelPicker 
            selectedLabels={ selectedLabels }
            onChange={ (labelName ) => onLabelChanged( labelName ) }
          />
        </View>
          {
            issuesQuery.isLoading
              ? ( <Loading /> )
              : ( <IssuesList
                    issues={ issuesQuery.data || [] } 
                    state={ state }
                    onStateChanged={ (newState) => setState( newState )}
                  /> )
          }
        </View>
        
      </View>
    </>
  )
}

const stylesHome = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'red'
    },
    containerTitle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'red',
      // padding: 10

    },
    title: {
      fontSize: 25,
      fontWeight: 'bold'
    },
    subTitle: {
      fontSize: 14,
      marginHorizontal: 8,
      top: 3,
      color: 'rgba(0,0,0,0.8)'
    }
});
