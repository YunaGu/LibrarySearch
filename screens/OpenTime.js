import { TouchableOpacity,Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/Ionicons';

export default class OpenTime extends Component {
  state ={
    expanded: true,
  }

  _toggleItem = (expanded) => {
    // console.log("You tapped the button!");
    this.setState({
       expanded: !expanded,
    });
  };

  render() {
    const {expanded} = this.state;
    return (
      <View style={styles.compWrapper}>

        <TouchableOpacity 
          style={styles.titleWrapper}
            onPress={() => {
              this._toggleItem(expanded)
            }}
          >
          <View style={styles.firstTwo}>
            <Icon name="time-outline" size={24} color='#383735'></Icon>
            <Text style={styles.textBodyBold}>Open time</Text>
          </View>
          <Icon name={expanded ? "chevron-up-outline": "chevron-down-outline"} size={24} color='#383735'></Icon>
        </TouchableOpacity>
        
            {expanded ? (
              <View style={styles.couldBeHidden}>
                 <View style={styles.card}>
                        <View style={styles.eachRow}>
                          <Text style={[styles.textBodyDefault, styles.textGray]}>Monday</Text>
                          <Text style={[styles.textBodyDefault, styles.textGray]}>Open 24 hours</Text>
                        </View>
                        <View style={styles.eachRow}>
                          <Text style={[styles.textBodyDefault, styles.textGray]}>Tuesday</Text>
                          <Text style={[styles.textBodyDefault, styles.textGray]}>Open 24 hours</Text>
                        </View>
                        <View style={styles.eachRow}>
                          <Text style={[styles.textBodyDefault, styles.textGray]}>Wednesday</Text>
                          <Text style={[styles.textBodyDefault, styles.textGray]}>Open 24 hours</Text>
                        </View>
                        <View style={styles.eachRow}>
                          <Text style={[styles.textBodyDefault, styles.textGray]}>Thursday</Text>
                          <Text style={[styles.textBodyDefault, styles.textGray]}>Open 24 hours</Text>
                        </View>
                        <View style={styles.eachRow}>
                          <Text style={[styles.textBodyDefault, styles.textGray]}>Friday</Text>
                          <Text style={[styles.textBodyDefault, styles.textGray]}>Open 24 hours</Text>
                        </View>
                        <View style={styles.eachRow}>
                          <Text style={[styles.textBodyDefault, styles.textGray]}>Saturday</Text>
                          <Text style={[styles.textBodyDefault, styles.textGray]}>Open 24 hours</Text>
                        </View>
                        <View style={styles.eachRow}>
                          <Text style={[styles.textBodyDefault, styles.textGray]}>Sunday</Text>
                          <Text style={[styles.textBodyDefault, styles.textGray]}>Open 24 hours</Text>
                        </View>
                      </View>
            
                      <Text style={styles.textBodyDefault}>These opening hours are for this week.</Text>
            
                      <View style={styles.link}>
                        <Icon name="document-outline" size={24} color="#383735"></Icon>
                        <Text style={[styles.textBodyBold, styles.linkedText]}>View opening times for 2022-23</Text>
                      </View>
              </View>
            ): null}

        </View>
       
    )
  }
}

const styles = StyleSheet.create({
  couldBeHidden:{
    width: '100%',
    gap: 10,
  },
  link:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  linkedText:{
    color: '#045BC6',
  },
  textGray:{
    color: '#666'
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

  eachRow:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  card:{
    width: '100%',
    borderRadius: 6,
    backgroundColor: '#F5F5F3',
    padding: 10,
    gap: 10,
  },

  firstTwo:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  titleWrapper:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
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
  textBodyBold:{
    color: "#383735",
    // fontFamily: 'Franklin Gothic Book',
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    textAlign: "left",
},
})