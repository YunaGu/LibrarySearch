import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React from 'react'
import Top from './screens/Top'
import Seperator from './screens/Seperator'
import OpenTime from './screens/OpenTime'
import Occupancy from './screens/Occupancy'
import GoodToKnow from './screens/GoodToKnow'
import Details from './screens/Details'
// import Test from './screens/Test'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import {Font} from 'expo'

// const light= require('./assets/fonts/lato-Light.ttf')

const Stack = createNativeStackNavigator()

const App = () => {

  fetch('https://reactnative.dev/movies.json')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    return json.movies;
  })
  .catch(error => {
    console.error(error);
  });

  return (
    <ScrollView>
      <View style={styles.outtom}>
        <View style={{height:40}}></View>
        <Top></Top>
        {/* <Test /> */}
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