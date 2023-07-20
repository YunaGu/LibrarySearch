// Address.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Address = () => {
  return (
    <View>
            <Text style={[styles.textBodyDefault, styles.textGray]}>Colum Drive</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>Cathays</Text>
            <Text style={[styles.textBodyDefault, styles.textGray]}>CF10 3EU</Text>        
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container:{
    gap: 10
  },
  textBodyBold:{
    color: "#383735",
    // fontFamily: 'Franklin Gothic Book',
    fontSize: 17,
    lineHeight: 24,
    // fontStyle: 'normal',
    fontWeight: '600',
    textAlign: "left",
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
  textGray:{
    color: "#666",
  },
})