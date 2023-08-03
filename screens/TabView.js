// import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
// import React, { Component } from 'react'



// export default class TabView extends Component {

//     state = {
//         index: 0,
//         selected: false,
//     }

// _setIndex = (index) => {
//     const {callBack} = this.props

//     if (typeof callBack=='function' ) {
//         callBack(index);
//     }
//     this.setState({ index: index });
// }

//   render() {
//     const {index} = this.state;
//     const {title} = this.props;
//     return title ? title.map((item, i)=>{
//         return (      
//                 <ScrollView>
//                     <TouchableOpacity 
//                         key={i}
//                         onPress={()=>{this._setIndex(i)}}
//                         // onLayout={(e)=>{this._setLayout(e.nativeEvent.layout)}}
//                         style = {index == i ? styles.selecedTab : styles.unselecedTab}
//                     >
//                         <Text style={index == i ? styles.textBodyBold : styles.textBodyDefault}>{item}</Text>
//                     </TouchableOpacity>  
//                 </ScrollView>     
// )
//     }):null;
//   }
// }


// const styles = StyleSheet.create({
//     tabContainer:{
//         display: 'flex',
//         flexDirection: 'row',
//     },
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