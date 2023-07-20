// contactDetails.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const contactDetails = () => {
  return (
    <View>
            <Text style={[styles.textBodyDefault, styles.textGray]}>+44 (0)29 2087 4818</Text>        
            <Text style={[styles.textBodyDefault, styles.textBlue]}>asslliby@cardiff.ac.uk</Text>
            <Text style={[styles.textBodyDefault, styles.textBlue]}>librarydisabilitycontact@cardiff.ac.uk</Text>  
            <Text style={[styles.textBodyDefault, styles.textBlue]}>University Library Service</Text>              
    </View>
  );
};

export default contactDetails;

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
  textBlue:{
    color: "#045BC6",
  }
})