import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IssuesList } from '../components/IssuesList';
import { LabelPicker } from '../components/LabelPicker';
import { styles } from '../Theme/globalTheme';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const [seletedLabels, setSeletedLabels] = useState<string[]>([]);

  const onLabelChanged = ( labelName: string ) => {
    ( seletedLabels.includes( labelName ) )
      ? setSeletedLabels( seletedLabels.filter( label => label != labelName))
      : setSeletedLabels([...seletedLabels, labelName ]);
  }

  return (
    <>
      <View style={{...stylesHome.container, top: top + 20, ...styles.globalMargin} }>
        <View style={{...stylesHome.containerTitle}}>
          <Text style={ stylesHome.title }>Git Issues</Text>
          <Text style={ stylesHome.subTitle }>Seguimiento de problemas</Text>
        </View>
        <View>
          <IssuesList />
        </View>
        <View style={{ marginTop: 20 }}>
          <LabelPicker 
            seletedLabels={ seletedLabels }
            onChange={ (labelName ) => onLabelChanged( labelName ) }
          />
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
