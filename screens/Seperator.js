import {StyleSheet, View, Text } from 'react-native'
import React, { Component } from 'react'

export default class Seperator extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#000', opacity: 0.20000000298023224}} />
      </View>
    )
  }
}