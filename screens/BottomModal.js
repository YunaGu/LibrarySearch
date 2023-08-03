import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <Pressable style={styles.centeredView} onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalView}>
            <View style={styles.smRetangular}></View>
            <Text style={styles.textBodyBold}>Choose floor</Text>
            <View style={styles.list}>
                <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textBodyDefault}>Entire Building</Text>
                </Pressable>
                <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textBodyDefault}>Lower Ground</Text>
                </Pressable>
                <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textBodyDefault}>Ground Floor</Text>
                </Pressable>
                <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textBodyDefault}>First Floor</Text>
                </Pressable>
                <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textBodyDefault}>Second Floor</Text>
                </Pressable>
            </View>
          </View>
        </Pressable>
      </Modal>
      <Pressable
        style={styles.border}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textBodyDefault}>Ground Floor</Text>
        <Icon name="chevron-down-outline" size={14} color='#383735'></Icon>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    list:{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch'
    },
    smRetangular:{
        width: 50, 
        height: 5, 
        backgroundColor:'rgba(151, 151, 151, 0.60)',
        borderRadius: 4,
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
    border:{
        borderColor: 'rgba(0, 0, 0, 0.20)',
        borderWidth: 1,
        borderRadius: 6,

        width: 150, //how to hug content?
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,

        // gap: 10,

        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        marginLeft: 38,
    },
  centeredView: {
    backgroundColor:'rgba(0, 0, 0, 0.25)',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    display: 'flex',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderColor: 'rgba(0, 0, 0, 0.20)',
    borderBottomWidth: 1,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    // border: 1,
    // borderColor: '#666',
    // borderRadius: 20,
    padding: 10,
    elevation: 2,
    // backgroundColor: '#2196F3',
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
});

export default BottomModal;