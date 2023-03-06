import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IssuesList } from '../components/IssuesList';
import { LabelPicker } from '../components/LabelPicker';
import { Loading } from '../components/Loading';
import { useIssuesInfinite } from '../hooks';
import { State } from '../interfaces';
import { styles } from '../Theme/globalTheme';

export const HomeScreenInfinite = () => {

  const { top } = useSafeAreaInsets();

  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [state, setState] = useState<State>();

  const { issuesQuery } = useIssuesInfinite({ labels: selectedLabels, state });

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

        {/* <View style={{ borderStartColor: 'yellow' }}> */}
          <View style={{ marginTop: 20 }}>
            <LabelPicker 
              selectedLabels={ selectedLabels }
              onChange={ (labelName ) => onLabelChanged( labelName ) }
            />
          </View>

          {/* <View 
              style={{ 
                  flexDirection: 'row', 
                  // backgroundColor: 'green', 
                  justifyContent: 'space-between' ,
                  alignItems: 'center',
                  padding: 10,
                  position: 'absolute',
                  top: top + 640,
                  zIndex: 999,
                  // width: windownWidth - 20
                  
                  
              }}
            >
              <TouchableOpacity
                activeOpacity={ 0.8 }
                style={{
                    borderRadius: 20,
                    width: 120,
                    height: 40,
                    // position: 'absolute',
                    backgroundColor: issuesQuery.isFetching ? 'grey' : 'orange',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={ () => issuesQuery.fetchNextPage() }
                disabled={ !issuesQuery.hasNextPage }
              >
                  <Text style={{ fontSize: 20 }}>Load more</Text>
              </TouchableOpacity>
          </View> */}

          <View style={{ backgroundColor: 'white' }}>
            {
              issuesQuery.isLoading
                ? ( <Loading /> )
                : ( <IssuesList
                      issues={ issuesQuery.data?.pages.flat() || [] } 
                      state={ state }
                      onStateChanged={ (newState) => setState( newState )}
                      hasP={ issuesQuery.fetchNextPage() }
                    /> )
            }

           

          </View>
        {/* </View> */}
        
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
