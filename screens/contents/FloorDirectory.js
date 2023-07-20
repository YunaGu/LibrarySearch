// FloorDirectory.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FloorDirectory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.floor}>

        <View>
          <Text style={[styles.textBodyDefault, styles.textGray]}>Lower ground</Text>
          <Text style={[styles.textBodyDefault, styles.textGray]}> {'\u2022'} Special Collections and Archives</Text> 
          <Text style={[styles.textBodyDefault, styles.textGray]}> {'\u2022'} eLounge</Text> 
          <Text style={[styles.textBodyDefault, styles.textGray]}> {'\u2022'} vending machines</Text>                   
        </View>

        <View>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Ground</Text>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Social sciences, psychology, anthropology, education and politics.</Text>        
        </View>

        <View>
                <Text style={[styles.textBodyDefault, styles.textGray]}>First</Text>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Business and economics, law, optometry and vision sciences</Text>        
        </View>

        <View>
          <Text style={[styles.textBodyDefault, styles.textGray]}>Second</Text>
          <Text style={[styles.textBodyDefault, styles.textGray]}>Humanities, including philosophy, religion and theology, archaeology, history, art, language and literature, music, and modern Welsh and Celtic studies</Text>        
        </View>
        
      </View>

      <Text style={[styles.textBodyDefault, styles.textGray]}>You can contact a subject librarian if you have a subject-specific question, or use our general contact details for any other queries.</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    gap: 10
  },
  floor:{
    gap: 10,
    marginLeft: 10,
    marginRight: 10,
},textBodyBold:{
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
  fontWeight: '400',
  textAlign: "left",
},
textGray:{
  color: "#666",
},
})

export default FloorDirectory;


