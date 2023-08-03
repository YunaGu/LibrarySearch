import React, { Component } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Bg from "../assets/bg.jpg";
// import Ionicon from 'react-native-ionicons'
// import Icon from 'react-native-ionicons'
import Icon from 'react-native-vector-icons/Ionicons';



export default class Top extends Component {
  state = {
    select: 0,
  };
  _onPressButton = (value) => {
    console.log("You tapped the button!");
    this.setState({
      select: value,
    });
  };

  render() {
    const { select } = this.state; //deconstruct, get select from state,  state changed-> re-render

    return (
      <View style={{ width: '100%', height: 315 }}>
        <ImageBackground source={Bg} style={styles.image}>
          <View style={styles.comb}>
            <TouchableOpacity
              style={select == 0 ? styles.selected : styles.unselected}
              onPress={() => {
                this._onPressButton(0);
              }}
            >
              <Text style={select == 0 ? styles.textBodyDefault : styles.textBodyWhite}>Photos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={select == 1 ? styles.selected : styles.unselected}
              onPress={() => {
                this._onPressButton(1);
              }}
            >
              <Text style={select == 1 ? styles.textBodyDefault : styles.textBodyWhite}>Map</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.compWrapper}>
            <Text style={styles.textTitle}>Arts and Social Studies Library</Text>
            <View style={styles.itemWrapper}>
                <View style={styles.item}>
                    <Text style={styles.textBodyDefault}>Hours</Text>
                    <Text style={[styles.textBodyBold, styles.open]}>Open</Text>
                </View>
            <View style={styles.item}>
                <Text style={styles.textBodyDefault}>Real-time</Text>
                <View style={styles.icons}>
                <Icon name="person" />
                <Icon name="person" />
                <Icon name="person" />
                <Icon name="person" />
                <Icon name="person-outline" />
                    {/* <Text>Icons</Text> */}
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.textBodyDefault}>Distance</Text>
                <View style={styles.textWrapper}>
                    <Text style={[styles.textBodyBold, styles.textDark]}>1.1 </Text>
                    <Text style={[styles.textBodyDefault, styles.textDark]}>mi</Text>
                </View>
            </View>
            <View style={styles.itemIcon}>
                {/* <Ionicon name="walk"></Ionicon> */}
                <Icon name="walk-outline" size={26}/>
                <Text style={styles.smText}>12 min</Text>
            </View>
            </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  icons:{
    display: 'flex',
    flexDirection: 'row',
  },
    open:{
        color:'#159868',
    },
    textDark:{
        color:'#383735',
    },
    itemIcon:{
      display: 'flex',
      flexDirection: 'column',
        height: 50,
        width: 50,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D9D9D9",
        borderRadius: 6,
    },
    item:{
        display: 'flex',
        height: 44,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemWrapper:{
        display: "flex",
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    compWrapper:{
        display: 'flex',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
    },
    textWrapper:{
        display: 'flex',
        flexDirection: 'row',
    },
    textTitle:{
        color: "#383735",
        // fontFamily: 'Franklin Gothic Medium',
        fontSize: 17,
        lineHeight: 24,
        // fontStyle: 'normal',
        fontWeight: '600',
        textAlign: "left",
    },
    textBodyDefault:{
        color: "#666666",
        // fontFamily: 'Franklin Gothic Book',
        fontSize: 17,
        lineHeight: 24,
        fontWeight: '400',
        textAlign: "left",
    },
    textBodyBold:{
        color: "#666666",
        // fontFamily: 'Franklin Gothic Book',
        fontSize: 17,
        lineHeight: 24,
        fontWeight: '600',
        textAlign: "left",
    },
    textBodyWhite:{
        color: "#fff",
        // fontFamily: 'Franklin Gothic Book',
        fontSize: 17,
        lineHeight: 24,
        fontWeight: '400',
        textAlign: "left",
    },
    smText:{
        color: '#666',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 12 /* 100% */
    },
  unselected: {
    backgroundColor: "#D9D9D9",
    lineHeight: 24,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  selected: {
    backgroundColor: "#FFFFFF",
    lineHeight: 24,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  comb: {
    display: "flex",
    flexDirection: "row",
    marginTop: 152,
    marginLeft: 250,
    height: 34,
    width: 120,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // height: 211,
  },
  text: {
    color: "#383735",
    fontSize: 17,
    lineHeight: 21,
    textAlign: "left",
    //   margin: 15,
    //   marginLeft: 20,
    //   marginBottom: 15,
    //   backgroundColor: '#000000c0',
  },
});

// export default Top;