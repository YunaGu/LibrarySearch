import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import Testnav from './testNav'

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
          <Testnav></Testnav>
        <View style={styles.Tabs}>
            <View style={styles.selectedTab}>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Floor directory</Text> 
            </View>
            <View style={styles.unselectedTab}>
              <Text style={[styles.textBodyDefault, styles.textGray]}>Access</Text>
          </View>
          <View style={styles.unselectedTab}>
              <Text style={[styles.textBodyDefault, styles.textGray]}>Study space</Text>
          </View>
          <View style={styles.unselectedTab}>
              <Text style={[styles.textBodyDefault, styles.textGray]}>Facilities</Text>
          </View>
        </View>

        <View style={styles.floor}>
            <View style={styles.lowerGround}>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Lower ground</Text>
                <Text style={[styles.textBodyDefault, styles.textGray]}> {'\u2022'} Special Collections and Archives</Text>                   
                <Text style={[styles.textBodyDefault, styles.textGray]}> {'\u2022'} eLounge</Text>
                <Text style={[styles.textBodyDefault, styles.textGray]}> {'\u2022'} vending machines</Text>        
            </View>

            <View style={styles.Ground}>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Ground</Text>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Social sciences, psychology, anthropology, education and politics.</Text>        
            </View>

            <View style={styles.First}>
                <Text style={[styles.textBodyDefault, styles.textGray]}>First</Text>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Business and economics, law, optometry and vision sciences</Text>        
            </View>

            <View style={styles.Second}>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Second</Text>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Humanities, including philosophy, religion and theology, archaeology, history, art, language and literature, music, and modern Welsh and Celtic studies</Text>        
            </View>
        </View>

        {/* <Text style={[styles.textBodyDefault, styles.textGray]}>You can contact a <Text style={textLinked}>subject librarian</Text> if you have a subject-specific question, or use our general contact details for any other queries.</Text> */}
        <Text style={[styles.textBodyDefault, styles.textGray]}>You can contact a subject librarian if you have a subject-specific question, or use our general contact details for any other queries.</Text>

        {/* <View style={styles.floor}>
            <Text style={[styles.textBodyDefault, styles.textGray]}>An accessible entrance for assisted entry to the building is located on the west side of the building at lower ground floor level. Entry is staff-mediated, use the intercom by the entrance.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>A lift provides access to all floors of the library.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>Two disabled parking spaces are available close to the Arts and Social Studies Library (by the railway line) which can be accessed from Colum Drive.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>An accessible toilet is provided on the entrance floor.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>Low-level catalogue terminals are available.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>Staff will retrieve books from the shelves, please ask for assistance.</Text>        
        </View> */}

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