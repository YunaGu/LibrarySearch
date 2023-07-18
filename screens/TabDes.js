import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'



export default class TabDes extends Component {

    state = {
        index: 0,
    }

_setIndex = (index) => {
    const {callBack} = this.props

    if (typeof callBack=='function' ) {
        callBack(index);
    }
    this.setState({ index: index });

    // console.log(index);
}

  render() {
    const {index} = this.state;
    const {description} = this.props;
    return description ? description.map((item, i)=>{
        return (      
            <TouchableOpacity 
                key={i}
                onPress={()=>{this._setIndex(i)}}
            >
                <Text style={index == i ? styles.textBodyBold : styles.textBodyDefault}>{item}</Text>
            </TouchableOpacity>  
)
    }):null;
  }
}


const styles = StyleSheet.create({
    tabDescription:{
        width: 390,
    },
    tabContainer:{
        display: 'flex',
        flexDirection: 'row',
    },
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