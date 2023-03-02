import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useLabels } from '../hooks/useLabels';
import { Loading } from './Loading';

interface Props {
  seletedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker = ({ onChange, seletedLabels }:Props) => {

  const { labelsQuery } = useLabels();

  if ( labelsQuery.isLoading ) {
    return (<Loading />)
  }
 
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={ false }
        style={{ marginBottom: 300 }}
      >
        {
          labelsQuery.data?.map( label => (
            <TouchableOpacity
              activeOpacity={ 0.5 } 
              key={ label.id } 
              style={{
                ...styles.container,
                borderColor: `#${ label.color }`,
                borderWidth: 1,
                marginBottom: 10,
                backgroundColor: `${ seletedLabels.includes(label.name) ? 'rgba(228, 241, 254, 1)' : '' }`
              }}
              onPress={() => onChange( label.name )}
            >
                <Text style={{ color: `#${ label.color }`}}>{ label.name }</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        borderWidth: 1,
        color: '#ffccd3',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
        // height: 30,
        // width: 100,
    }
});

