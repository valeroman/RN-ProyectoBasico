import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IssueComment } from '../components/IssueComment';
import { Loading } from '../components/Loading';
import { useIssue } from '../hooks';
import { RootStackParams } from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'IssueScreen'> {};

export const IssueScreen = ({ navigation, route }: Props) => {

  const { issue } = route.params;

  const { number = '0', } = issue;

  const { issueQuery, commentsQuery } = useIssue( +number );

  // if ( !issueQuery.data ) {
  //   navigation.navigate('HomeScreen');
  // }

  // if ( issueQuery.isLoading ) {
  //   return ( <Loading /> )
  // }
  // console.log('ISSUE==>', issue.id);

  const { top } = useSafeAreaInsets();

  return (
    <SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={ false }
      >
        <View style={{padding: 10, top: top + 20 }}>
          {
            issueQuery.isLoading 
              ? ( <Loading />)
              : <IssueComment issue={ issue } />
          }

          {/* {
            commentsQuery.isLoading && ( <Loading /> )
          } */}
          {
            commentsQuery.isLoading 
              ? ( <Loading /> )
              : commentsQuery.data?.map( issue => (
                <IssueComment key={ issue.id } issue={ issue } />
              ))
          }
          
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}
