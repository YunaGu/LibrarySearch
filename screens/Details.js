import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import Tabs from './TabCard'

import Icon from 'react-native-vector-icons/Ionicons';


export default class Details extends Component {
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
            <Icon name="information-circle-outline" size={24} color='#383735'></Icon>
            <Text style={styles.textBodyBold}>Details</Text>
          </View>
          <Icon name={expanded ? "chevron-up-outline": "chevron-down-outline"} size={24} color='#383735'></Icon>
        </TouchableOpacity>

        {expanded ? (

        <View style={styles.couldBeHidden}>
                    <Tabs></Tabs>
                  {/* <View style={styles.card}>
            <View style={styles.Tabs}>
                <View style={styles.selectedTab}>
                    <Text style={[styles.textBodyDefault, styles.textGray]}>Address</Text> 
                </View>
                <View style={styles.unselectedTab}>
                  <Text style={[styles.textBodyDefault, styles.textGray]}>Contact details</Text>
              </View>
              <View style={styles.unselectedTab}>
                  <Text style={[styles.textBodyDefault, styles.textGray]}>Twitter</Text>
              </View>
              <View style={styles.unselectedTab}>
                  <Text style={[styles.textBodyDefault, styles.textGray]}>Blog</Text>
              </View>
            </View>

            <View style={styles.tabContent}>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Colum Drive</Text>  
                <Text style={[styles.textBodyDefault, styles.textGray]}>Cathays</Text>  
                <Text style={[styles.textBodyDefault, styles.textGray]}>CF10 3EU</Text>    
            </View>

            {/* <View style={styles.tabContent}>
                <Text style={[styles.textBodyDefault, styles.textGray]}>+44 (0)29 2087 4818</Text>   */}
                {/* should be linked below */}
                {/* <Text style={[styles.textBodyDefault, styles.textGray]}>asslliby@cardiff.ac.uk</Text>  
                <Text style={[styles.textBodyDefault, styles.textGray]}>librarydisabilitycontact@cardiff.ac.uk</Text>    
                <Text style={[styles.textBodyDefault, styles.textGray]}>University Library Service</Text>    
            </View> */}
            

          {/* </View>  */}

        </View>)
        :null} 

      </View>
    )
  }
}


const styles = StyleSheet.create({
    tabContent:{
        marginLeft: 10,
        marginRight: 10,
    },
    floor:{
        gap: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    selectedTab:{
        padding: 5,
        borderBottomWidth: 3,
        borderBottomColor: '#383735'
    },
    unselectedTab:{
        padding: 5,
    },
    Tabs:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        width: '100%',
        overflow: 'hidden',
    },
    card:{
        width: '100%',
        borderRadius: 6,
        backgroundColor: '#F5F5F3',
        padding: 10,
        gap: 10,
      },
    notification:{
        borderRadius: 6,
        backgroundColor: '#3A6CB5',
        display: 'flex',
        padding: 10,
        alignItems: 'flex-start',
        gap: 10,
        alignSelf: 'stretch',
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
    textLinked:{
        color: "#045BC6",
    }
})