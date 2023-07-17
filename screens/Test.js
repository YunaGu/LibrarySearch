import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Button } from 'react-native-paper';

export default class Test extends Component {
    state = {
        index: 0,
        // layout_list: [],
        scrollW: 0
    }

    // _onPress = (index) => {
    //     this.setState({ index: index });
    // }

    _setIndex = (index) => {
        this.setState({ index: index });
        console.log(index);
    }

    // clickToScroll= ()=>{
    //     this.myScrollView.scrollTo({x: 100, y: 100, animated: false});
    // }

  render() {

    const { index } = this.state;

    return (
        <View >
            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            // ref = {(view)=>{this.myScrollView = view; }}
            scrollTo={{x: 100, y: 100, animated: false}}
            >
                <View><Text>111</Text></View>
                <View><Text>222</Text></View>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    selecedTab:{
        height: 31,
        margin: 5,
        borderBottomWidth: 3,
        borderBottomColor: '#383735'
    },
    unselecedTab:{
        height: 31,
        margin: 5,
        // borderBottomWidth: 3,
        // borderBottomColor: '#383735'
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
    textWhite:{
        color: "#fff",
    },
    textGray:{
        color: "#666",
    },

})