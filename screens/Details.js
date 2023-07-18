import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
// import Tabs from './TabCard'
import Tabs from './Tabs';

import Icon from 'react-native-vector-icons/Ionicons';


export default class Details extends Component {
  // state ={
  // }

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


  render() {
      const {expanded, activeTab} = this.state;
      
      const tabs = [
        { title: 'Address', content: 'Colum Drive\nCathays\nCF10 3EU' },
        { title: 'Contact Details', content: '+44 (0)29 2087 4818\nasslliby@cardiff.ac.uk\nlibrarydisabilitycontact@cardiff.ac.uk\nUniversity Library Service' },
        { title: 'Twitter', content: '@cardiffunilib' },
        { title: 'Blog', content: 'Blog' },
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
            <Text style={styles.textBodyBold}>Details</Text>
          </View>
          <Icon name={expanded ? "chevron-up-outline": "chevron-down-outline"} size={24} color='#383735'></Icon>
        </TouchableOpacity>

        {expanded ? (
          <View style={styles.card}>
            <View style={styles.container}>
              <Tabs tabs={tabs} onTabPress={this.handleTabPress} />
              <View style={styles.contentContainer}>
                <Text style={[styles.textBodyDefault,styles.content]}>{tabs[activeTab].content}</Text>
              </View>
            </View>
          </View>
        )
        :null} 

      </View>
    )
  }
}


const styles = StyleSheet.create({
  content:{
    // marginHorizontal: 10,
    marginVertical: 10,
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
  },
  contentText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
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