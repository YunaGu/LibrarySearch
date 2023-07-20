// Twitter.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Twitter = () => {
  return (
    <View>
            <Text style={[styles.textBodyDefault, styles.textBlue]}>@cardiffunilib</Text>              
    </View>
  );
};

export default Twitter;

const styles = StyleSheet.create({
  container:{
    gap: 10
  },
  textBodyDefault:{
    color: "#383735",
    // fontFamily: 'Franklin Gothic Book',
    fontSize: 17,
    lineHeight: 24,
    // fontStyle: 'normal',
    fontWeight: '400',
    textAlign: "left",
  },
  textBlue:{
    color: "#045BC6",
  }
})