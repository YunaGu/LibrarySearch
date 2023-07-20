// Facilities.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Facilities = () => {
  return (
    <View>
          <Text style={[styles.textBodyDefault, styles.textGray]}>Accessibility, Printers, Power Sockets, Wifi, Cloakroom, Computers, Study rooms, Lockers</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
textBodyDefault:{
  color: "#383735",
  // fontFamily: 'Franklin Gothic Book',
  fontSize: 17,
  lineHeight: 24,
  fontWeight: '400',
  textAlign: "left",
},
textGray:{
  color: "#666",
},
})

export default Facilities;


