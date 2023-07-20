// Blog.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Blog = () => {
  return (
    <View>
            <Text style={[styles.textBodyDefault, styles.textBlue]}>Blog</Text>              
    </View>
  );
};

export default Blog;

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