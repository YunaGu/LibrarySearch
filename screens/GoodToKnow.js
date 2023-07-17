import { Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import React, { Component } from 'react'
import Tabview from './TabView'

import Icon from 'react-native-vector-icons/Ionicons';

export default class GoodToKnow extends Component {
    state ={
        expanded: true,
      }
    
      _toggleItem = (expanded) => {
        // console.log("You tapped the button!");
        this.setState({
           expanded: !expanded,
        });
      };

      getIndex = (i) => {

        console.log(i, this.title[i])
    
      }
     
      // data = {
      //   title : ['Floor directory','Access','Study Space','Facilities'],
      //   description: ['Floor directory','Access','Study Space','Facilities'],
      // }
  
      title = ['Floor directory','Access','Study Space','Facilities'];
        
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
            <Text style={styles.textBodyBold}>Good to know</Text>
          </View>
            <Icon name={expanded ? "chevron-up-outline": "chevron-down-outline"} size={24} color='#383735'></Icon>
        </TouchableOpacity>


            {expanded ? (
            <View style={styles.couldBeHidden}>
              <View style={styles.notification}>
                <Text style={[styles.textBodyDefault, styles.textWhite]}>The building is on four floors and the entrance is on the ground floor.</Text>
              </View>
              <View style={styles.card}>
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
                >
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Tabview 
                    title={this.title}
                    callBack={this.getIndex}/>
                    </View>
                </ScrollView>
              </View>
            </View>

            ) : null}

          

      </View>
    )
  }
}


const styles = StyleSheet.create({
    couldBeHidden:{
        width: '100%',
        gap: 10,
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