import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Top from './screens/Top'
import Seperator from './screens/Seperator'
import OpenTime from './screens/OpenTime'
import Occupancy from './screens/Occupancy'
import GoodToKnow from './screens/GoodToKnow'
import Details from './screens/Details'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import {Font} from 'expo'

// const light= require('./assets/fonts/lato-Light.ttf')

const Stack = createNativeStackNavigator()

const App = () => {

  // fetch('https://reactnative.dev/movies.json')
  // .then(response => response.json())
  // .then(json => {
  //   console.log(json);
  //   return json.movies;
  // })
  // .catch(error => {
  //   console.error(error);
  // });

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.outtom}>
          <Top></Top>
          <Seperator></Seperator>
          <OpenTime></OpenTime>
          <Seperator></Seperator>
          <Occupancy></Occupancy>
          <Seperator></Seperator>
          <GoodToKnow></GoodToKnow>
          <Seperator></Seperator>
          <Details></Details>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
outtom:{
  display: 'flex',
  flex: 1,
  height: '100%',
  width: '100%',
  // backgroundColor: 'blue'
}

})


// oadAsync(( Lato-Light': Light ));componentDidMount await Font