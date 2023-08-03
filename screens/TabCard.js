// import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
// import React, { Component } from 'react'
// import Tabview from './TabView'
// import Tabdes from './TabDes'

// export default class Nav extends Component {
//     state = {
//         index: 0,
//         // layout_list: [],
//         selected: false,
//         scrollW: 0
//     }

//   getIndex = (i) => {
//     console.log(i, this.title[i]);
//     console.log(i, this.description[i]);
//     return i;
//   }

//   title = ['Floor directory','Access','Study Space','Facilities'];

// // description = [this.FloorScreen, this.AccessScreen, this.StudyScreen, this.FacilitiesScreen];
//   description = ['Colum Drive Cathays CF10 3EU', '+44 (0)29 2087 4818', '@cardiffunilib', 'Blog'];

  

//   render() {

//     const { index, selected } = this.state;

//     return (
//         <View style={styles.card}>
//             <ScrollView 
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             snapToAlignment="center"
//             >
//                 <View style={{display: 'flex', flexDirection: 'row'}}>
//                 <Tabview 
//                 title={this.title}
//                 callBack={this.getIndex}
//                 />
//                 </View>
//             </ScrollView>

//             <View style={{display: 'flex', flexDirection: 'row'}}>
//                     <Text> {this.description} </Text>
//                 {/* <Tabdes 
//                     callBack={this.getIndex}
//                     // description={(i)=>{this.description[i]}}
//                 ></Tabdes> */}
//             </View>

//         </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     content:{
//         flex: 1, 
//         justifyContent: 'flex-start', 
//         alignItems: 'center', 
//         gap:10
//     },
//     floor:{
//         gap: 10,
//         marginLeft: 10,
//         marginRight: 10,
//     },
//     card:{
//         width: '100%',
//         borderRadius: 6,
//         backgroundColor: '#F5F5F3',
//         padding: 10,
//         // gap: 10,
//       },
//     floor:{
//         gap: 10,
//         marginLeft: 10,
//         marginRight: 10,
//     },
//     selecedTab:{
//         height: 31,
//         margin: 5,
//         borderBottomWidth: 3,
//         borderBottomColor: '#383735'
//     },
//     unselecedTab:{
//         height: 31,
//         margin: 5,
//         // borderBottomWidth: 3,
//         // borderBottomColor: '#383735'
//     },
//     textBodyBold:{
//         color: "#383735",
//         // fontFamily: 'Franklin Gothic Book',
//         fontSize: 17,
//         lineHeight: 24,
//         // fontStyle: 'normal',
//         fontWeight: '600',
//         textAlign: "left",
//     },
//     textBodyDefault:{
//         color: "#383735",
//         // fontFamily: 'Franklin Gothic Book',
//         fontSize: 17,
//         lineHeight: 24,
//         // fontStyle: 'normal',
//         fontWeight: '400',
//         textAlign: "left",
//     },
//     textWhite:{
//         color: "#fff",
//     },
//     textGray:{
//         color: "#666",
//     },

// })