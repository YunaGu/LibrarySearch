// Access.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Access = () => {
  return (
    <View style={styles.container}>
            <Text style={[styles.textBodyDefault, styles.textGray]}>An accessible entrance for assisted entry to the building is located on the west side of the building at lower ground floor level. Entry is staff-mediated, use the intercom by the entrance.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>A lift provides access to all floors of the library.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>Two disabled parking spaces are available close to the Arts and Social Studies Library (by the railway line) which can be accessed from Colum Drive.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>An accessible toilet is provided on the entrance floor.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>Low-level catalogue terminals are available.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>Staff will retrieve books from the shelves, please ask for assistance.</Text>        
    </View>
  );
};

export default Access;

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