// studySpace.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const studySpace = () => {
  return (
    <View>
      <Text style={[styles.textBodyDefault, styles.textGray]}>The library has a variety of silent, quiet and social zones with range of study spaces including desks with or without electrical sockets, height adjustable desks and open access PCs. Library group rooms allows you to find and book group study rooms in libraries across the University.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  floor:{
    gap: 10,
    marginLeft: 10,
    marginRight: 10,
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

export default studySpace;
