import { Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import React, { Component } from 'react'
// import Tabview from './TabView'
import Tabs from './Tabs';

import Icon from 'react-native-vector-icons/Ionicons';

export default class GoodToKnow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      expanded: true,
    };
  }

  handleTabPress = (index) => {
    this.setState({ activeTab: index });
  };

  _toggleItem = (expanded) => {
    // console.log("You tapped the button!");
    this.setState({
       expanded: !expanded,
    });
  };


      // getIndex = (i) => {

      //   console.log(i, this.title[i])
    
      // }
     
      // data = {
      //   title : ['Floor directory','Access','Study Space','Facilities'],
      //   description: ['Floor directory','Access','Study Space','Facilities'],
      // }
          
  render() {
    const {expanded, activeTab} = this.state;
    const tabs = [
      { title: 'Floor directory', 
      content: 'The building is on four floors and the entrance is on the ground floor.\nLower ground\nSpecial Collections and Archives\neLounge\nvending machines\nGround\nSocial sciences, psychology, anthropology, education and politics.\nFirst\nBusiness and economics, law, optometry and vision sciences\nSecond\nHumanities, including philosophy, religion and theology, archaeology, history, art, language and literature, music, and modern Welsh and Celtic studies\nYou can contact a subject librarian if you have a subject-specific question, or use our general contact details for any other queries.'},
      { title: 'Access', content: 'An accessible entrance for assisted entry to the building is located on the west side of the building at lower ground floor level. Entry is staff-mediated, use the intercom by the entrance.\nA lift provides access to all floors of the library.\nTwo disabled parking spaces are available close to the Arts and Social Studies Library (by the railway line) which can be accessed from Colum Drive.\nAn accessible toilet is provided on the entrance floor.\nLow-level catalogue terminals are available.\nStaff will retrieve books from the shelves, please ask for assistance.' },
      { title: 'Study Space', content: 'The library has a variety of silent, quiet and social zones with range of study spaces including desks with or without electrical sockets, height adjustable desks and open access PCs.\nLibrary group rooms allows you to find and book group study rooms in libraries across the University.' },
      { title: 'Facilities', content: 'Accessibility, Printers, Power Sockets, Wifi, Cloakroom, Computers, Study rooms, Lockers' },
    ];
    
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
                <View style={styles.container}>
                  <Tabs tabs={tabs} onTabPress={this.handleTabPress} />
                  <View style={styles.contentContainer}>
                    <Text style={[styles.textBodyDefault,styles.content]}>{tabs[activeTab].content}</Text>
                  </View>
              </View>
              </View>
            </View>

            ) : null}

          

      </View>
    )
  }
}


const styles = StyleSheet.create({
  content:{
    // marginHorizontal: 10,
    marginVertical: 10,
    // backgroundColor:'red',
    height: 'auto',
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
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5F5F3',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  contentText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
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