import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Tabview from './TabView'

export default class Nav extends Component {
    state = {
        index: 0,
        // layout_list: [],
        scrollW: 0
    }

    _setIndex = (index) => {
        this.setState({ index: index });
        console.log(index);
    }
 
//     FloorScreen = () => {
//         return (
//           <View style={styles.content}>
//             <View style={styles.floor}>
//                   <View style={styles.lowerGround}>
//                       <Text style={[styles.textBodyDefault, styles.textGray]}>Lower ground</Text>
//                       <Text style={[styles.textBodyDefault, styles.textGray]}> {'\u2022'} Special Collections and Archives</Text>                   
//                       <Text style={[styles.textBodyDefault, styles.textGray]}> {'\u2022'} eLounge</Text>
//                       <Text style={[styles.textBodyDefault, styles.textGray]}> {'\u2022'} vending machines</Text>        
//                   </View>
      
//                   <View style={styles.Ground}>
//                       <Text style={[styles.textBodyDefault, styles.textGray]}>Ground</Text>
//                       <Text style={[styles.textBodyDefault, styles.textGray]}>Social sciences, psychology, anthropology, education and politics.</Text>        
//                   </View>
      
//                   <View style={styles.First}>
//                       <Text style={[styles.textBodyDefault, styles.textGray]}>First</Text>
//                       <Text style={[styles.textBodyDefault, styles.textGray]}>Business and economics, law, optometry and vision sciences</Text>        
//                   </View>
      
//                   <View style={styles.Second}>
//                       <Text style={[styles.textBodyDefault, styles.textGray]}>Second</Text>
//                       <Text style={[styles.textBodyDefault, styles.textGray]}>Humanities, including philosophy, religion and theology, archaeology, history, art, language and literature, music, and modern Welsh and Celtic studies</Text>        
//                   </View>
//               </View>
      
//               {/* <Text style={[styles.textBodyDefault, styles.textGray]}>You can contact a <Text style={textLinked}>subject librarian</Text> if you have a subject-specific question, or use our general contact details for any other queries.</Text> */}
//               <Text style={[styles.textBodyDefault, styles.textGray]}>You can contact a subject librarian if you have a subject-specific question, or use our general contact details for any other queries.</Text>
      
//           </View>
//         );
//       }


//     AccessScreen = () => {
//     return (
//       <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        
//           <View style={styles.floor}>
//               <Text style={[styles.textBodyDefault, styles.textGray]}>An accessible entrance for assisted entry to the building is located on the west side of the building at lower ground floor level. Entry is staff-mediated, use the intercom by the entrance.</Text>        
//               <Text style={[styles.textBodyDefault, styles.textGray]}>A lift provides access to all floors of the library.</Text>        
//               <Text style={[styles.textBodyDefault, styles.textGray]}>Two disabled parking spaces are available close to the Arts and Social Studies Library (by the railway line) which can be accessed from Colum Drive.</Text>        
//               <Text style={[styles.textBodyDefault, styles.textGray]}>An accessible toilet is provided on the entrance floor.</Text>        
//               <Text style={[styles.textBodyDefault, styles.textGray]}>Low-level catalogue terminals are available.</Text>        
//               <Text style={[styles.textBodyDefault, styles.textGray]}>Staff will retrieve books from the shelves, please ask for assistance.</Text>        
//           </View>
//       </View>
//     );
//   }

//     StudyScreen = () => {
//     return (
//       <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
//         <Text style={[styles.textBodyDefault, styles.textGray]}>The library has a variety of silent, quiet and social zones with range of study spaces including desks with or without electrical sockets, height adjustable desks and open access PCs.
//   Library group rooms allows you to find and book group study rooms in libraries across the University.</Text>
//       </View>
//     );
//   }

//    FacilitiesScreen = () => {
//     return (
//       <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
//         <Text style={[styles.textBodyDefault, styles.textGray]}>Accessibility, Printers, Power Sockets, Wifi, Cloakroom, Computers, Study rooms, Lockers</Text>
//       </View>
//     );
//   }

  getIndex = (i) => {

    console.log(i, this.title[i])

  }

  title = ['Floor directory','Access','Study Space','Facilities'];


  render() {

    const { index } = this.state;

    return (
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
            
            {/* <View style={{display: 'flex', flexDirection:'row'}}>
            { index ==0 ? (<View style={{width: '100%', height: '100%',}}>
                {this.FloorScreen()}
            </View>   ) : null  }
            { index ==1 ? (<View style={{width: '100%', height: '100%',}}>
                {this.AccessScreen()}
            </View>   ) : null  }
            { index ==2 ? (<View style={{width: '100%', height: '100%',}}>
                {this.StudyScreen()}
            </View>   ) : null  }
            { index ==3 ? (<View style={{width: '100%', height: '100%',}}>
                {this.FacilitiesScreen()}
            </View>   ) : null  }
           </View> */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
    content:{
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        gap:10
    },
    floor:{
        gap: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    card:{
        width: '100%',
        borderRadius: 6,
        backgroundColor: '#F5F5F3',
        padding: 10,
        // gap: 10,
      },
    floor:{
        gap: 10,
        marginLeft: 10,
        marginRight: 10,
    },
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