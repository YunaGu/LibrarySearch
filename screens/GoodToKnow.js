import { Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import React, { Component } from 'react'
// import Tabview from './TabView'
import Tabs from './Tabs';
import FloorDirectory from './contents/FloorDirectory';
import Access from './contents/Access';
import StudySpace from './contents/studySpace';
import Facilities from './contents/Facilities';

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

  renderContent = (index) => {
    switch (index) {
      case 0:
        return <FloorDirectory />;
      case 1:
        return <Access />;
      case 2:
        return <StudySpace />;
      case 3:
        return <Facilities />;
      default:
        return null;
    }
  };
          
  render() {
    const {expanded, activeTab} = this.state;

    const tabs = [
      { title: 'Floor directory', 
      content: this.renderContent(0) },
      { title: 'Access', content: this.renderContent(1) },
      { title: 'Study Space', content: this.renderContent(2) },
      { title: 'Facilities', content: this.renderContent(3) },
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